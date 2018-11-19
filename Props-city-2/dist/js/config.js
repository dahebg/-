"use strict";

require.config({
  baseUrl: "/",
  paths: {
    //"header": "module/header",
    //"footer": "module/footer",
    "jquery": "libs/jquery/jquery-1.11.3",
    "carousel": "module/carousel",
    "migrate": "libs/jquery.cookie",
    "template": "libs/template-web"
  },
  //垫片
  shim: {
    "footer": {
      deps: ["jquery"]
    }
  }
});