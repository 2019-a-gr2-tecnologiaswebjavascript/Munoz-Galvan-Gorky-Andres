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
      unique:true,
      required:true,
      minLength: 4
    },
    tamanio:{
      type:'string'

    },
    descriptorArchivo:{
      type:'string'

    },
    tipo:{
      type:'string'

    },
    arregloProductosUsuario:{
      collection: 'productoUsuario', // Modelo a relacionarse
      via:'fkProducto',
    },

  },

};

