require(["config"],function(){

require(["jquery","template"],function($,template){
	
	new Promise(function(resolve,reject){
			$("header").load("./component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("./component/footer.html");
		}).then(function(){
			
			$("#sy").hover(
			  function () {
			    //$(this).css("background" : "#f74a4a");
			    $("#subnav").css({"display": "block"});
			  }//,
//			  function () {
//			    //$(this).css("background" : "#3a3f4a");
//			    $("#subnav").css({"display": "none"});
//			  }
			)
			
			
			
		}).then(function(){
			$("#subnav").hover(function () {
					$("#sy").css({"background" : "#f74a4a"});
					 //$("#subnav").css({"display": "block"});
				  },
				  function(){
				  	$("#subnav").css({"display": "none"});
				  }
			)
		}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/117462/example/1542169512854",
				success: function(res){
                      console.log("222");	
                       console.log(res);
					var html = template("pro-template",{products: res.cf});
					//console.log(html);
					$("#proList").html(html);
				}
		   
		     })
		   
			
		     
		}).then(function(){
		   $("#x-4").on("click",function(e){
				var e = e.target|| e.srcElement;
				//获取id的值
				//console.log(e);
				var id = e.id;
				console.log(id);
				
				
				$("#proList li").remove("li");
				
				function get(id){
					$.ajax({
						method: "get",
						url:"http://rap2api.taobao.org/app/mock/117462/example/1542169512854",
						success: function(res){
		                       //console.log("222");
		                       //console.log(id);
		                       //alert(id);
		                       console.log(res);
							var html = template("pro-template",{products: res[id] });
							//obj ={name:ss}  obj.name   str = "name"  obj[str]
							//console.log(html);
							$("#proList").html(html);
						}
				   
				     })
				}
				
				get(id);
				
			})
		   //console.log("111");
		}).then(function(){
			 $("#x-4 li a").on("click",function(e){
			 	//去掉ac
		   	    var len = $("#x-4 li a").length;
		   	    for(var i = 0;i<=len;i++){
		   	    	$("#x-4 li a").removeClass("ac");
		   	    }
		   	    $(this).addClass("ac");
			 })
			   
		}).then(function(){
			console.log("3333");
		})
	
})




})	






                