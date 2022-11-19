import express from 'express'

import {rutas} from '../routes/rutas.js'
import {conectarConBaseDatos} from '../database/conexionBD.js'

export class ServidorAPI{

    constructor(){
        this.app = express()
        this.conactarConBD()
        this.atenderPeticiones()
    }

    levantarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Encendiendo Servidor "+process.env.PORT)
        })
    }

    conactarConBD(){
        conectarConBaseDatos()
    }

    atenderPeticiones(){
        this.app.use(express.json()) 
        this.app.use('/',rutas)
        
    }

}