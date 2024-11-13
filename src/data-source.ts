import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entity/UsuarioEntity";
import { Examen } from "./entity/ExamenEntity";
import { Pregunta } from "./entity/PreguntaEntity";
import { InsumoEvaluacion } from "./entity/InsumoEvaluacionEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ep-yellow-moon-a5c0pocz.us-east-2.aws.neon.tech",
    port: 5432,
    username: "ServidorW_owner",
    password: "PF2mbOCJBA6q",
    database: "ServidorW",
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false 
    },
    entities: [Pregunta, InsumoEvaluacion, Examen, Usuario],
    migrations: [],
    subscribers: [],
});
