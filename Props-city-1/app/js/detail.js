require(["config"],function(){

require(["jquery","template"],function($,template){
	
	new Promise(function(resolve,reject){
			$("header").load("./component/header.html",function(){
				resolve();
			})
		}).then(function(){
			$("footer").load("./component/footer.html");
			//console.log($("#sear"));
		}).then(function(){
			//同时发送异步请求渲染主体部分

		//从url上取出id参数，然后携带这个参数去请求当前数据
		var str = location.search.slice(1);
		var arr = str.split("="); // ["id","3"];
		var obj = {};
		obj[arr[0]] = arr[1];

				$.ajax({
					url:"http://localhost/api/detail.php",
					data: obj,
					method:"POST",
					dataType:"json",
					success: function(res){
						//console.log(res);
						if(res.code === 1){
							var str = template("detil-template",{product: res.product});
							$("#zhong").html(str);
						}
						
						      // 当鼠标进入“缩略图”窗口时，显示“原图”窗口和“放大镜”框
						        $('#left-top').mouseover(function (e) {
						            $('#fdj').css('display', 'block');
						            $(".magnifier").css('display', 'block');
						        })
						
						
						$("#left-top").on("mousemove", function(e){
		        	      // 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）
						           console.log("222");
						            // 获取鼠标当前位置
						            var pageX = e.pageX;
						            var pageY = e.pageY;
						            console.log(pageX );
						            console.log(pageY );
						            // 获取“缩略图”窗口在整个文档中的偏移位置
						            var offsetX = $("#left-top").offset().left;
						            var offsetY = $("#left-top").offset().top;
						            console.log(offsetX);
						            console.log(offsetX);
						            // 计算鼠标在缩略图中的相对位置
						            var relativeX = pageX - offsetX;
						            var relativeY = pageY - offsetY;
						            console.log(relativeX);
						            console.log(relativeY);
						            // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
						            var magOffsetX = $(".magnifier").width() / 2;
						            var magOffsetY = $(".magnifier").height() / 2;
						            $(".magnifier").css({ left: relativeX - magOffsetX + 'px',
						                top: relativeY - magOffsetY + 'px' });
						            // 获取“放大镜”框的新位置，后面会用到
						            var magX = $(".magnifier").position().left;
						            var magY = $(".magnifier").position().top;
						   
						            // 二、处理越界情况
						   
						            // 确定边界
						            var maxMagX = $("#left-top").width() - $(".magnifier").width()
						            var maxMagY = $("#left-top").height() - $(".magnifier").height()
						            // 左边界
						            if (magX <= 0) { $(".magnifier").css('left', '0px'); }
						            // 右边界
						            if (magX >= maxMagX) { $(".magnifier").css('left', maxMagX + 'px'); }
						            // 上边界
						            if (magY <= 0) { $(".magnifier").css('top', '0px'); }
						            // 下边界
						            if (magY >= maxMagY) { $(".magnifier").css('top', maxMagY + 'px'); }
						   
						            // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
						   
						            // 按照之前确定的缩放比例移动“原图”窗口中的图片
						            // 注意：图片的移动方向与鼠标的移动方向是相反的！
						            
						            var originX = magX * 2.5;
						            var originY = magY * 2.5;
						            $("#iimg").css({ left: -originX + 'px', top: -originY + 'px' });
						        // 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
								      $("#left-top").mouseout(function () {
								          $(".magnifier").css('display', 'none');
								          $("#fdj").css('display', 'none');
								      })
		        	     
		               })
						
						
					}
				})
		
		
		}).then(function(){

               console.log("666");
        

		}).then(function(){
			console.log("888");
		})
		
		
	


  })
		
})