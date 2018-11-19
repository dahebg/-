<?php
	header("Access-Control-Allow-Origin:http://localhost:1111");
	//header("Access-Control-Allow-Origin:*");
	//http://localhost:1111
	include("connect.php");
	
	$name = $_POST["username"];
	
	#3.拼接sql，并查询uname是否存在
	  $sql="select * from deng where name='$name'";
	  //echo $sql;
	  $res=mysql_query($sql);
	  $product = array();
	
	  #4.根据查询的结果输出相应
	  while($row = mysql_fetch_assoc($res)){
		$product["product"] = $row;
	}
	
	  //抓取一条数据，即当前uname对应的数据
	  if($product["product"]){
	  //如果$row为空，即数据库中没有相同的用户名存在
	    $product["code"] = 1;           //"通过";
	  }else{
	    $product["code"] = 0;        //"用户名称已存在";
	  };

	
	echo json_encode($product);
	//echo '{"code": 1}';
	
	?>