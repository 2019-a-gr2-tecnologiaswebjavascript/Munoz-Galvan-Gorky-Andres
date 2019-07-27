/**
 * CajeroController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
import {Cajero} from "../../../prueba-frontend/src/app/dto/cajero";

declare var Cajero;
module.exports = {

  login: async function (req, res) {

    const params = req.allParams();
    const nombreUsuario = params.nombreUsuario;
    const password = params.password;

    try {
      const cajero:Cajero = await Cajero.find({
        where: {
          nombre:nombreUsuario,
          password:password
        },
      });
      return res.ok({
        cajero,
      });
    } catch (e) {
      console.error(e);
      return res.serverError({
        error: 500,
        mensaje: 'Error del servidor'
      });
    }

  }
};

