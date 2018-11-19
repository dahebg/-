"use strict";

require(["config"], function () {
  require(["jquery", "carousel", "migrate"], function ($) {
    new Promise(function (resolve, reject) {
      $("header").load("/html/component/header.html", function () {
        resolve();
      });
    }).then(function () {
      $("footer").load("/html/component/footer.html");
    }).then(function () {
      //轮播图
      $('#lunbotu').carousel();
    }).then(function () {
      $("#q").hover(function () {
        $("#q b").css("border-bottom", "1px solid #666");
        $("#cf b").css("border-bottom", "none");
        $("#da").attr('src', "images/q1.jpg");

        for (var i = 1, b = 0; i <= 13, b <= 13; i++, b++) {
          console.log("#x-" + i);
          $("#x-" + i).attr('src', "/images/q" + (b + 2) + ".jpg");
        }
      });
      $("#cf").hover(function () {
        $("#cf b").css("border-bottom", "1px solid #666");
        $("#q b").css("border-bottom", "none");
        $("#da").attr('src', "/images/index_cf.jpg");

        for (var i = 1; i <= 13; i++) {
          console.log("#x-" + i);
          $("#x-" + i).attr('src', "images/cf" + i + ".jpg");
        }
      });
    }).then(function () {
      $("#reg").click(function () {
        $("#suo-box").css({
          "width": "100%",
          "height": "100%",
          "display": "block",
          "background": "rgba(6,6,6,0.7)",
          "position": "fixed",
          "z-index": "999"
        });
        var demo = "\n\t\t\t\t\t\t<div id=\"f-box\">\n\t\t  \t        \t<p id=\"qch\">X</p>\n\t\t  \t        \t\n\t\t  \t        \t<div id=\"o-x\">\n\t\t  \t        \t\t<p>\u5E10\u53F7\u5BC6\u7801\u767B\u5F55</p>\n\t\t  \t        \t\t<p>\u63A8\u8350\u4F7F\u7528<a href=\"javascript:;\">\u5FEB\u901F\u5B89\u5168\u767B\u5F55</a>\uFF0C\u9632\u6B62\u76D7\u53F7\u3002</p>\n\t\t  \t        \t</div>\n\t\t  \t        \t\n\t\t  \t        \t<div id=\"x-x\">\n\t\t  \t        \t\t<form id=\"form1\">\n\t\t\t\t  \t        \t<input type=\"text\" value=\"\" placeholder=\"\u652F\u6301QQ\u53F7/\u90AE\u7BB1/\u624B\u673A\u53F7\u767B\u8DEF\"/>\n\t\t\t\t  \t        \t<input type=\"text\" value=\"\" placeholder=\"\u5BC6\u7801\"/>\n\t\t\t\t  \t            </form>\n\t\t  \t        \t</div>\n\t\t  \t        \t<div id=\"d-btn\">\n\t\t  \t        \t\t<p>\u767B\u9646</p>\n\t\t  \t        \t</div>\n\t\t  \t        \t<a href=\"./html/register.html\" id=\"x-bottom\">\u6CE8\u518C\u8D26\u53F7</a>\n\t\t  \t        </div>\n\t\t\t\t\t\t";
        $('#suo-box').html(demo);
      });
    }).then(function () {
      $("#suo-box").delegate($("#qch"), "click", function (e) {
        e = e.target || e.srcElement; // console.log("222")
        //console.log(e);
        //console.log(e.id);

        if (e.id == "qch") {
          //console.log(e);
          //$("#suo-box").remove();
          document.getElementById("suo-box").style.display = "none"; //$("#suo-box").css({"display ":"none"});
          //window.location.reload();
        }
      });
    }).then(function () {
      //console.log("333");
      if (!($.cookie('name') == "")) {
        console.log("34453");
        $("#suo-box").css({
          "width": "100%",
          "height": "100%",
          "display": "block",
          "background": "rgba(6,6,6,0.7)",
          "position": "fixed",
          "z-index": "999"
        });
        var demo = "\n\t\t\t\t\t\t<div id=\"f-box\">\n\t\t  \t        \t<p id=\"qch\">X</p>\n\t\t  \t        \t\n\t\t  \t        \t<div id=\"o-x\">\n\t\t  \t        \t\t<p>\u5E10\u53F7\u5BC6\u7801\u767B\u5F55</p>\n\t\t  \t        \t\t<p>\u63A8\u8350\u4F7F\u7528<a href=\"javascript:;\">\u5FEB\u901F\u5B89\u5168\u767B\u5F55</a>\uFF0C\u9632\u6B62\u76D7\u53F7\u3002</p>\n\t\t  \t        \t</div>\n\t\t  \t        \t\n\t\t  \t        \t<div id=\"x-x\">\n\t\t  \t        \t\t<form id=\"form1\">\n\t\t\t\t  \t        \t<input type=\"text\" value=\"\" id=\"na-te\" placeholder=\"\u652F\u6301QQ\u53F7/\u90AE\u7BB1/\u624B\u673A\u53F7\u767B\u8DEF\"/>\n\t\t\t\t  \t        \t<input type=\"text\" value=\"\" id=\"password\" placeholder=\"\u5BC6\u7801\"/>\n\t\t\t\t  \t            </form>\n\t\t  \t        \t</div>\n\t\t  \t        \t<div id=\"d-btn\">\n\t\t  \t        \t\t<p>\u767B\u9646</p>\n\t\t  \t        \t</div>\n\t\t  \t        \t<a href=\"./html/register.html\" id=\"x-bottom\">\u6CE8\u518C\u8D26\u53F7</a>\n\t\t  \t        </div>\n\t\t\t\t\t\t";
        $('#suo-box').html(demo);
        var name = $.cookie('name');
        $("#na-te").val(name);
        $("#d-btn").on("click", function () {
          //用户名
          var $na = $("#na-te").val(); //密码

          var $pass = $("#password").val();

          if ($na == "") {
            alert("请输入用户名");
            $("#password").val("");
          } else if ($pass == "") {
            alert("请输入密码");
          } else if (!($na == "") && !($pass == "")) {
            $.ajax({
              method: "post",
              url: "http://localhost/api/disembark.php",
              data: {
                "username": $na,
                "password": $pass
              },
              dataType: "json",
              success: function success(res) {
                console.log(res);

                if (res.code == 1) {
                  console.log("清除");
                  document.getElementById("suo-box").style.display = "none";
                  alert("登陆成功");
                  $("#li-de").html("Hello 可爱的<b style='margin-right: 4px;'>" + $na + "!</b>");
                } else if (res.code == 0) {
                  alert("用户名或密码输入错误");
                  $("#password").val("");
                }
              }
            });
            /*$.ajax的结尾*/
          }
        });
      }
    }).then(function () {
      console.log("333");
    });
  });
});