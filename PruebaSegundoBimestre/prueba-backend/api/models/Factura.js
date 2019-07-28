/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreComprador:{
      type:'string',
      required: true
    },
    cedulaComprador:{
      type:'string',
      required:true
    },
    direccionComprador:{
      type:'string',
    },
    telefonoComprador:{
      type:'number',
    },
    correoComprador:{
      type:'string'
    },
    total:{
      type:'number',
      required:true
    },
    nombreCajero:{
      type:'string',
      required:true
    }
  },

};

