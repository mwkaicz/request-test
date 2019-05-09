module.exports = {


  friendlyName: 'Ajax',


  description: 'Ajax something.',


  inputs: {

  },


  exits: {
    succsess: {
      statusCode: 200,
      responseType: 'jsonResponse',
      description: ''
    }
  },


  fn: async function (inputs, exits) {
    return exits.success({lang: this.req.getLocale()});
  }


};
