require(["config"],function(){

require(["jquery","template"],function($,template){
	
	new Promise(function(resolve,reject){
			$("header").load("./component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("./component/footer.html");
		})
		

     })

})