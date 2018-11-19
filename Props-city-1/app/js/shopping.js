require(["config"],function(){

require(["jquery","template","migrate"],function($,template){
	
	new Promise(function(resolve,reject){
			$("header").load("./component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("./component/footer.html");
		}).then(function(){
			
        if($.cookie()){

        	$("#menu").remove();
        	$("#box").css({"display":"block"});
        	var w = JSON.parse($.cookie("product"));
            console.log(w);


			
			for(var i = 0; i < w.length ;i++){
				var mo =  `
				<!--过渡地带-->
		  	  	<div class="guo-two" style="width: 100%; height: 5px; background:#f5f5f5 ;">
		  	  			
		  	   </div>
				
				<div id="spl">
		  	        	<ul class="wrn">
		  	        		<li>
		  	        			<div class="zd">
		  	        				<input type="checkbox" class="anlui">
		  	        			</div>
		  	        			
		  	        			<img src="${w[i].img}"/>
		  	        			<a href="javascript:;">${w[i].h3}</a>
		  	        			<p>规格：常规</p>
		  	        			<p>${w[i].p}.00 元</p>
		  	        			<a href="javascript:;">-</a>
		  	        			<input type="" name="" id="" value="${w[i].cd}" />
		  	        			<a href="javascript:;">+</a>
		  	        			<p>${w[i].p}.00 元</p>
		  	        			<a href="javascript:;">删除</a>
		  	        		</li>
		  	        		
		  	        		<li></li>
		  	        	</ul>
		  	    	 	
		  	    	 </div><!--spl的结尾--> 
		  	    	 
		  	    	 <!--过渡地带-->
		  	  	<div class="guo-two" style="width: 100%; height: 5px; background:#f5f5f5 ;">
		  	  			
		  	   </div>
		  	    	 `
				
				$("#da-box").append(mo);
			}
				//console.log(mo)
				
				
				$.cookie("product", JSON.stringify(w) ,{expires: 1,path:"/"});
				
        }
        

		}).then(function(){
//			console.log("888");
		})//Promise的结尾
		

     })

})