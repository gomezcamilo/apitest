import * as dotenv from 'dotenv'
dotenv.config()

import {ServidorAPI} from './API/ServidorAPI.js'

// objeto para utilizar la api

let apiHotel=new ServidorAPI()

apiHotel.levantarServidor()




