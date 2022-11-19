import {ServicioReserva} from '../service/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}

    async agregarReserva(request,response){
        let datosARegistrar=request.body
        let objetoServicio=new ServicioReserva()
        try{
            await objetoServicio.agregarReserva(datosARegistrar)
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

    async consultarReservas(request,response){
        let objetoServicio=new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos":await objetoServicio.buscarTodasReservas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })
        }
    }

    async consultarReserva(request,response){
        let id=request.params.id
        let objetoServicio=new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Su habitacion ah sido reservada",
                "datos":await objetoServicio.buscarReservaPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Oh, no! hubo un error en la reserva de tu habitacion "+error,
                "datos":null
            })
        }
    }

    async editarReserva(request,response){

        let id=request.params.id

        let datosAEditar=request.body

        let objetoServicio=new ServicioReserva()

        try{
            await objetoServicio.editarReserva(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Su reserva fue editada correctamente",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Oh no! hubo un error editando tu reserva, vuelve a intentarlo "+error,
                "datos":null
            })
        }
    }



}