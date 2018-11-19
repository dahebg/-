<?php
    header("Access-Control-Allow-Origin:*");
	include("connect.php");
	
	$pass = $_POST["password"];
	$name = $_POST["username"];
	
	$product = array(
	 "code" => "",
   );
	
	
	//拼接sql，并查询uname是否存在
	  $sql="select * from deng where name='$name'";
	  $res=mysql_query($sql);
	  if($res == null){
	  	$product["code"] = 0;
	  	echo json_encode($product);
	  }else{
	  	$sqlw="insert into deng(name,password) values ('$name','$pass')";
	    $resw=mysql_query($sqlw);
	    $product["code"] = 1;
	    echo json_encode($product);
	  }
	
//	$sqlw="insert into deng(name,password) values ('$name','$pass')";
//	
//	$resw=mysql_query($sql);
//   
//	   echo $res ? "{code: 1}" : "{code: 0}";
?>