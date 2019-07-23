/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numeroPokemon:{
      type:'number',
      required:true,
    },
    nombrePokemon:{
      type:'string',
      required:true,
      maxLength:200,
    },
    poderEspecialUno:{
      type:'string',
      defaultsTo: 'putear'
    },
    poderEspecialDos:{
      type:'string',
      defaultsTo: 'putear con más ganas'
    },
    fechaCaptura:{
      type:'string',
      defaultsTo:'2019-02-27'
    },
    nivel:{
      type:'number',
      defaultsTo:1,
    },
    fkEntrenador:{
      model:'entrenador',
      required:true,
    }
  },

};

