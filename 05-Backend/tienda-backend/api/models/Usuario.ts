/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required: true,
      minLength:3,
      maxLength:60,
    },
    apellido:{
      type:'string',
      required:true
    },
    cedula:{
      type:'string',
      required:true,
      unique:true,
      minLength:10,
      maxLength:25
    },
    username:{
      type:'string',
      required:true,
      unique:true,
      minLength:3,
      maxLength:60,
    },
    sueldo:{
      type:'number',
      min:100,
      max:500.00,
      defaultsTo:100
    },
    estaCasado:{
      type:'boolean',
      defaultsTo:false,
    },
    tipoUsuario:{
      type:'string',
      enum:['normal','pendiente','premium'],
      defaulstTo: 'normal'
    },
    correo:{
      type:'string',
      isEmail: true
    }
  },

};

