require(["config"],function(){
	require(["jquery" , "carousel","migrate"],function($){
		
		
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("/html/component/footer.html");
		}).then(function(){
			//轮播图
			$('#lunbotu').carousel()
		}).then(function(){
		    $("#q").hover(function(){
		    	
		    		$("#q b").css("border-bottom","1px solid #666");
		    		$("#cf b").css("border-bottom","none");
		    		
		    		$("#da").attr('src',"images/q1.jpg");
		    		
		    		for(var i=1,b = 0; i<=13, b<=13;i++,b++){
		    			console.log("#x-" + i)
		    			$("#x-" + i).attr('src',"/images/q" +(b+2)+".jpg");
		    		}
		  	        		
		  	});
		  	        	
		  	        	$("#cf").hover(function(){
		  	        		
			  	        		$("#cf b").css("border-bottom","1px solid #666");
			  	        		$("#q b").css("border-bottom","none");
			  	        		
			  	        		$("#da").attr('src',"/images/index_cf.jpg");
			  	        		
			  	        		for(var i=1; i<=13;i++){
			  	        			console.log("#x-" + i)
			  	        			
			  	        			$("#x-" + i).attr('src',"images/cf" +i+".jpg");
			  	        		}
		  	        		
		  	        	})
		  	        	
		}).then(function(){
		    $("#reg").click(function(){
		    	$("#suo-box").css({ "width":"100%","height":"100%","display": "block","background":"rgba(6,6,6,0.7)" , "position":"fixed", "z-index":"999" });
		    	
		    	 let demo = `
						<div id="f-box">
		  	        	<p id="qch">X</p>
		  	        	
		  	        	<div id="o-x">
		  	        		<p>帐号密码登录</p>
		  	        		<p>推荐使用<a href="javascript:;">快速安全登录</a>，防止盗号。</p>
		  	        	</div>
		  	        	
		  	        	<div id="x-x">
		  	        		<form id="form1">
				  	        	<input type="text" value="" placeholder="支持QQ号/邮箱/手机号登路"/>
				  	        	<input type="text" value="" placeholder="密码"/>
				  	            </form>
		  	        	</div>
		  	        	<div id="d-btn">
		  	        		<p>登陆</p>
		  	        	</div>
		  	        	<a href="./html/register.html" id="x-bottom">注册账号</a>
		  	        </div>
						`

                      $('#suo-box').html(demo);
		    	
		    })
		    
		    
		   
		}).then(function(){
			$("#suo-box").delegate($("#qch"),"click",function(e){
				e = e.target|| e.srcElement;
				  // console.log("222")
				   //console.log(e);
		    	   //console.log(e.id);
		    	   
				   if(e.id == "qch"){
				   	//console.log(e);
				   	//$("#suo-box").remove();
				   	document.getElementById("suo-box").style.display = "none";
				   	//$("#suo-box").css({"display ":"none"});
				   	//window.location.reload();
				   }
		    	   
				});
		    
		}).then(function(){
			//console.log("333");
		    if( !($.cookie('name') == "") ){
		    	console.log("34453");
		    	 $("#suo-box").css({ "width":"100%","height":"100%","display": "block","background":"rgba(6,6,6,0.7)" , "position":"fixed", "z-index":"999" });
		    	
		    	 let demo = `
						<div id="f-box">
		  	        	<p id="qch">X</p>
		  	        	
		  	        	<div id="o-x">
		  	        		<p>帐号密码登录</p>
		  	        		<p>推荐使用<a href="javascript:;">快速安全登录</a>，防止盗号。</p>
		  	        	</div>
		  	        	
		  	        	<div id="x-x">
		  	        		<form id="form1">
				  	        	<input type="text" value="" id="na-te" placeholder="支持QQ号/邮箱/手机号登路"/>
				  	        	<input type="text" value="" id="password" placeholder="密码"/>
				  	            </form>
		  	        	</div>
		  	        	<div id="d-btn">
		  	        		<p>登陆</p>
		  	        	</div>
		  	        	<a href="./html/register.html" id="x-bottom">注册账号</a>
		  	        </div>
						`

                  $('#suo-box').html(demo);
                  
                  var name = $.cookie('name');
                   $("#na-te").val(name);
                   
                   $("#d-btn").on("click",function(){
                   	//用户名
                   	var $na = $("#na-te").val();
                   	//密码
                   	var $pass = $("#password").val();
                   	
                   	if($na== ""){
		   	            alert("请输入用户名");
                    	$("#password").val("");
                      }else if($pass == ""){
                    	alert("请输入密码");
                      }else if(!($na == "") && !($pass == "")){
                      	 $.ajax({
									method:"post",
									url: "http://localhost/api/disembark.php",
									data:{"username":$na,"password":$pass},
									dataType: "json",
									success:function(res){
										console.log(res);
										if(res.code == 1){
										console.log("清除");
										document.getElementById("suo-box").style.display = "none";
										alert("登陆成功");
										$("#li-de").html("Hello 可爱的<b style='margin-right: 4px;'>" +$na+"!</b>");
										}else if(res.code == 0){
											alert("用户名或密码输入错误")
											$("#password").val("");
											
										}
									}
				
						  
						})/*$.ajax的结尾*/
						
                      }
                   	
				})
                   
                   
                   
                   
		    }
		}).then(function(){
		    console.log("333");	
		   
		})
	
	
	
	})
	
	
})

