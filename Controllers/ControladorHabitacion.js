import {ServicioHabitacion} from '../service/ServicioHabitacion.js'

export class ControladorHabitacion{

    constructor(){}

    async agregarHabitacion(request,response){
        let datosARegistrar=request.body
        let objetoServicio=new ServicioHabitacion() 
        try{
            await objetoServicio.agregarHabitacion(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta "+error,
                "datos":null
            })
        }
    }

    async consultarHabitaciones(request,response){
        let objetoServicio=new ServicioHabitacion() 
        try{
            response.status(200).json({
                "mensaje":"Buscando Habitaciones",
                "datos": await objetoServicio.buscarTodasHabitaciones()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })
        }
    }

    async consultarHabitacion(request,response){
        let id=request.params.id
        let objetoServicio=new ServicioHabitacion() 
        try{
            response.status(200).json({
                "mensaje":"Busqueda Exitosa",
                "datos":await objetoServicio.buscarHabitacionPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })
        }
    }

    async editarHabitacion(request,response){

        let id=request.params.id
        let datosAEditar=request.body

        let objetoServicio=new ServicioHabitacion()

        try{

            await objetoServicio.editarHabitacion(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Edicion Exitosa.",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la operacion "+error,
                "datos":null
            })

        }
    }

    async eliminarReserva(request,response){

        let id=request.params.id
        let datosAeliminar=request.body

        let objetoServicio=new ServicioHabitacion()

        try{

            await objetoServicio.eliminarHabitacion(id,datosAeliminar)
            response.status(200).json({
                "mensaje":"La habitacion ah sido eliminada exitosamente",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Error Eliminando la habitacion "+error,
                "datos":null
            })

        }
    }
}