/**
 * Entrenador.js
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
    appelido:{
      type:'string',
      required: true
    },

    fechaNacimiento:{
      type:'string',
    },
    numeroMedallas:{
      type:'number',
      defaultsTo:0,
    },
    campeonActual:{
      type:'boolean',
      defaultsTo: false,
    },
    arregloPokemones:{
      collection:'pokemon',
      via:'fkEntrenador'
    }
  },

};

