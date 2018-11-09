require(["config"],function(){
	require(["jquery"],function($){
		
		
		new Promise(function(resolve,reject){
			$("header").load("html/component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("html/component/footer.html");
		}).then(function(){
		    console.log("222");	
		})
	
	
	
	})
	
	
})

