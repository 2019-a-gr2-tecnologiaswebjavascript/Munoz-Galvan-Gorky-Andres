/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    nombre:{
      type:'string',
      required:true,
    },
    codigo:{
      type:'string',
      required:true,
      minLength: 4
    },
    arregloProductosUsuario:{
      collection: 'productoUsuario', // Modelo a relacionarse
      via:'fkProducto',
    }

  },

};

