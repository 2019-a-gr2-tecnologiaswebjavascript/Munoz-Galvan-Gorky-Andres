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
    }

  },

};

