"use strict";

require(["config"], function () {
  require(["jquery", "template", "migrate"], function ($, template) {
    new Promise(function (resolve, reject) {
      $("header").load("./component/header.html", function () {
        resolve();
      });
    }).then(function () {
      $("footer").load("./component/footer.html");
    }).then(function () {
      if ($.cookie()) {
        $("#menu").remove();
        $("#box").css({
          "display": "block"
        });
        var w = JSON.parse($.cookie("product"));
        console.log(w);

        for (var i = 0; i < w.length; i++) {
          var mo = "\n\t\t\t\t<!--\u8FC7\u6E21\u5730\u5E26-->\n\t\t  \t  \t<div class=\"guo-two\" style=\"width: 100%; height: 5px; background:#f5f5f5 ;\">\n\t\t  \t  \t\t\t\n\t\t  \t   </div>\n\t\t\t\t\n\t\t\t\t<div id=\"spl\">\n\t\t  \t        \t<ul class=\"wrn\">\n\t\t  \t        \t\t<li>\n\t\t  \t        \t\t\t<div class=\"zd\">\n\t\t  \t        \t\t\t\t<input type=\"checkbox\" class=\"anlui\">\n\t\t  \t        \t\t\t</div>\n\t\t  \t        \t\t\t\n\t\t  \t        \t\t\t<img src=\"".concat(w[i].img, "\"/>\n\t\t  \t        \t\t\t<a href=\"javascript:;\">").concat(w[i].h3, "</a>\n\t\t  \t        \t\t\t<p>\u89C4\u683C\uFF1A\u5E38\u89C4</p>\n\t\t  \t        \t\t\t<p>").concat(w[i].p, ".00 \u5143</p>\n\t\t  \t        \t\t\t<a href=\"javascript:;\">-</a>\n\t\t  \t        \t\t\t<input type=\"\" name=\"\" id=\"\" value=\"").concat(w[i].cd, "\" />\n\t\t  \t        \t\t\t<a href=\"javascript:;\">+</a>\n\t\t  \t        \t\t\t<p>").concat(w[i].p, ".00 \u5143</p>\n\t\t  \t        \t\t\t<a href=\"javascript:;\">\u5220\u9664</a>\n\t\t  \t        \t\t</li>\n\t\t  \t        \t\t\n\t\t  \t        \t\t<li></li>\n\t\t  \t        \t</ul>\n\t\t  \t    \t \t\n\t\t  \t    \t </div><!--spl\u7684\u7ED3\u5C3E--> \n\t\t  \t    \t \n\t\t  \t    \t <!--\u8FC7\u6E21\u5730\u5E26-->\n\t\t  \t  \t<div class=\"guo-two\" style=\"width: 100%; height: 5px; background:#f5f5f5 ;\">\n\t\t  \t  \t\t\t\n\t\t  \t   </div>\n\t\t  \t    \t ");
          $("#da-box").append(mo);
        } //console.log(mo)


        $.cookie("product", JSON.stringify(w), {
          expires: 1,
          path: "/"
        });
      }
    }).then(function () {//			console.log("888");
    }); //Promise的结尾
  });
});