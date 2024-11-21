import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsuarioModule } from './Usuario/usuario.module';
import { ExamenModule } from './Examen/examen.module';
import { PreguntaModule } from './Pregunta/pregunta.module';
import { InsumoEvaluacionModule } from './Insumo-evaluacion/insumo-evaluacion.module';
import { Examen } from './Examen/Entities/examen.entity'; 
import { Pregunta } from './Pregunta/Entities/pregunta.entity'; 
import { Usuario } from './Usuario/Entities/usuario.entity';
import { InsumoEvaluacion } from './Insumo-Evaluacion/Entities/insumo-evaluacion.entity';  
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, 
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'development', 
      logging: true,
      entities: [Examen, InsumoEvaluacion, Pregunta, Usuario],
      extra: {
        ssl: { rejectUnauthorized: false }, 
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      autoSchemaFile: true, 
    }),
    UsuarioModule,
    ExamenModule,
    PreguntaModule,
    InsumoEvaluacionModule,
  ],
})
export class AppModule {}
