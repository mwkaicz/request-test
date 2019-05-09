module.exports = {


  friendlyName: 'Http',


  description: 'Http something.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    },
  },


  fn: async function (inputs, exits) {
    return exits.success({lang: this.req.getLocale()});
  }


};
