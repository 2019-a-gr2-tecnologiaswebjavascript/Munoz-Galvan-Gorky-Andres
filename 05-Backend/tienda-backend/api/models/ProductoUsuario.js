/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type:'number',
      min: 1,
    },
    //Configuración hijo
    fkUsuario:{ //Nombre del campo fk
      model:'usuario', //modelo a relacionarse (hijo)
      required:true, //FK modelo a relacionarse
    },
    fkProducto:{ //Nombre del campo fk
      model:'producto', //modelo a relacionarse (hijo)
      required:true, //FK modelo a relacionarse
    }

  },

};

