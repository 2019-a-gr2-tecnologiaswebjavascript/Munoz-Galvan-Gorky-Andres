/**
 * EntrenadorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
import {Entrenador} from "../../../prueba-frontend/src/app/dto/entrenador";

declare var Entrenador;
module.exports = {

  buscarEntrenador: async function (req,res){
    const params = req.allParams();
    const parametroBusqueda = params.buscarEntrenador;
    var reg = new RegExp('^\\d+$');

    try{
      let entrenador = {} as  Entrenador;
      if(reg.test(parametroBusqueda)){
        entrenador = await Entrenador.find({
          where:{
            numeroMedallas:Number(parametroBusqueda)
          }
        });
      }else{
        entrenador = await Entrenador.find({
          where: {nombre:parametroBusqueda}
        });
      }
      return res.ok({
        entrenador,
      });

    }catch (e) {
      return res.serverError({
        error: 500,
        mensaje: 'Error del servidor'+e
      });
    }
  }

};

