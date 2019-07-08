/**
 * LedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios')
module.exports = {
    encenderLed: async(req,res)=>{
        const parametros = req.allParams();
        if(parametros.idLed){
            const url = 'http://localhost:1338/sensor/encenderLed';
            
            try{
                const respuesta = await axios.post(url,{
                    idLed: parametros.idLed
                });
                console.log(respuesta)
                return res.ok({mensaje:'Ok'})

            }catch(error){
                console.error('Error: ',error);
                return res.serverServerEror({
                    error: 500,
                    mensaje:'Error en el servidor'
                })

            }
        }else{
            return res.serverServerEror({
                mensaje: 'No envá idLed',
                error:400
            })
        }

    }
};

