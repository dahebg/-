require(["config"],function(){
	 //alert("www");
	require(["jquery","migrate"],function($){
		 //alert("www");
		var user =$("#user").val();
		var pass =$("#password").val();
		//var us = $("#user");
		
		console.log($(".input-1"))
		console.log($(".input-1"))
    
	    $(".input-1").delegate("input","blur",function(){
	    	var user =$("#user").val();
	    	console.log(user)
		  $.ajax({
					
					method:"post",
					url: "http://localhost/api/post-user.php",
					data:{"username":user},
					dataType: "json",
					success:function(res){
						//console.log(res);
						if(res.code == 1){
							//console.log($("#input-y"));
							$("#input-y").css({display :" block"}) ;
							
							//$("#input-y").attr( display: "block");
							//alert("用户名已存在，请重新输入");
							$("#user").val("");
							
							   $(".input-1").delegate("input","focus",function(){
							   	      $("#input-y").css({display :"none"}) ;
							   })
							   
						}
					}

		  
		})/*$.ajax的结尾*/
		  
		  
		  
		  
		  
		
		})/* $(".input-1").delegate的结尾*/
	    
	    
	    
	    /*立即注册事件*/
		   $("#login").on("click",function(){
		   	     var $ur = $("#user").val();
		   	     var $pa = $("#password").val();
//		   	     console.log($ur);
//		   	     console.log($pa);
		   	     
		   	                    if($ur == ""){
		   	                    	 alert("请输入用户名");
		   	                    	//$("#user").val("");
		   	                    	$("#password").val("");
		   	                    	//console.log("www")
		   	                      }else if($pa == ""){
		   	                    	alert("请输入密码");
		   	                    	//console.log("ddc")
		   	                      }else if(!($ur == "") && !($pa == "")){
		   	                      	var $user =$("#user").val();
		   	                      	var $password =$("#password").val();
				   	                      	console.log($user);
				   	                        console.log($password);
		   	                      	 $.ajax({
					
											method:"post",
											url: "http://localhost/api/insertion.php",
											data:{"username":$user,"password":$password},
											dataType: "json",
											success:function(res){
												console.log(res);
												if(res.code == 1){
													console.log("110");
													//$("#user").val("");
													 //$("#password").val("");
													 
													 //用户名存cookie
													 var user = $("#user").val();
													 //console.log($.cookie)
													$.cookie("name",user,{expires: 1,path:"/"});
													 
													 alert("注册成功");
													 window.location.href = "http://localhost:1111";
												}
											}
						
								  
								})/*$.ajax的结尾*/
		   	                 }
		   	                    
							   	      
			})
		  
	    
	    
	    
	    
	    
	    
	    
	    
	})
})


		
