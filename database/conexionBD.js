import mongoose from 'mongoose';

export async function conectarConBaseDatos(){

    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Data base Starting...")

    }catch(error){
        console.log("error al conectar cob BD: "+error)
    }
    
}
