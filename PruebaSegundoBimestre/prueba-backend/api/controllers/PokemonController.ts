/**
 * PokemonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
import {Pokemon} from "../../../prueba-frontend/src/app/dto/pokemon";

declare var Pokemon;
module.exports = {

  buscarPokemonesPorEntrenador: async function (req,res){
    const params = req.allParams();
    const idEntrenador = params.idEntrenador;
    try {
      let pokemon: Pokemon = await Pokemon.find({
        where:{
          fkEntrenador:idEntrenador
        }
      });
      return res.send(pokemon);
    }catch (e) {
      console.error(e);
      return res.serverError({
        error: 500,
        mensaje: 'Error del servidor'
      });

    }
  }
  

};

