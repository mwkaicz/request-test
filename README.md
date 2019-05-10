# request-test

a [Sails v1](https://sailsjs.com) application


Related with: https://github.com/balderdashy/sails/issues/5305

### Reason of this test:
socket request always returns default language code.

### Changes in code:

+ /api/controllerss/http.js
+ /api/controllerss/ajax.js
+ /config/i18n.js
+ /config/routes.js
+ /views/layouts/layout.ejs
+ /views/pages/homepage.ejs
+ /assets/dependencies/jquery.min.js
+ /assets/images/czech-results.png


### Life cycle of app: 
+ http get '/'  
  *- returns HP with ``{lang: req.getLocale()}``*

  *action reply:*
  ```
  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    },
  },
  fn: async function (inputs, exits) {
    return exits.success( { lang: this.req.getLocale() } );
  }  
  ```

+ ``$(document).ready(function(){
  io.socket.post('/', {}, function(ret){
    $('#socket-response').html("'" + ret.lang + "'");
  });
});`` 

  *- returns json with ``{lang: req.getLocale()}``*
  
  *action reply:*
  ```
  exits: {
    succsess: {
      statusCode: 200,
      responseType: 'jsonResponse'
    }
  },
  fn: async function (inputs, exits) {
    return exits.success({lang: this.req.getLocale()});
  }
  ```

### How to reproduce this problem:
+ look what's your prefered browser language and then setup some another in i18n.js as defaultLocale (not identical with your browser language)

### Exception:
+ both values in first two rows should be the same because they are obtained from the same page - but they are different :/

### Problem:
+ io.socket always returns defaultLocale instead of browser language


This app was originally generated on Thu May 09 2019 07:40:44 GMT+0200 (Central Europe Daylight Time) using Sails v1.1.0.

<!-- Internally, Sails used [`sails-generate@1.16.8`](https://github.com/balderdashy/sails-generate/tree/v1.16.8/lib/core-generators/new). -->

<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

