<?php
    header("Access-Control-Allow-Origin:*");
	include("connect.php");
	
	//获取用户名和密码
	$pass = $_POST["password"];
	$name = $_POST["username"];
	
	//查询数据库中用户表的数据，并返回提示信息
	//if($uname && $upwd){ 
	    $sql="SELECT * FROM deng WHERE name='$name' and binary password='$pass'"; 
	    //密码区分大小写，加binary
	    $res=mysql_query($sql);
	    //echo $res;
	    $row=mysql_num_rows($res); 
	    
	    $product = array();
	    
	    
      if(!$row){
      	$product["code"] = 0;
      	echo json_encode($product);
      }else{
	     $product["code"] = 1;
	  	echo json_encode($product);
	  	}
      
		   
//	    if($res == null){
//	    $product["code"] = 0;
//	  	echo json_encode($product);
//	      
//	    }else{
//	     $product["code"] = 1;
//	  	echo json_encode($product);
//	}
	

?>