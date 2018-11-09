"use strict";

require.config({
  baseUrl: "/",
  paths: {
    //"header": "module/header",
    //"footer": "module/footer",
    "jquery": "libs/jquery/jquery-1.11.3"
  },
  //垫片
  shim: {
    "footer": {
      deps: ["jquery"]
    }
  }
});