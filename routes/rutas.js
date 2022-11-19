import express from 'express'

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'


export let rutas=express.Router()
let controlHabitacion=new ControladorHabitacion()
let controlReserva= new ControladorReserva()

rutas.post('/api/hotel/habitaciones',controlHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones',controlHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controlHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controlHabitacion.editarHabitacion)

rutas.post('/api/hotel/reservas',controlReserva.agregarReserva)
rutas.get('/api/hotel/reservas',controlReserva.consultarReservas)
rutas.get('/api/hotel/reservas/:id',controlReserva.consultarReserva)
rutas.put('/api/hotel/reservas/:id',controlReserva.editarReserva)

