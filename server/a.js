const express=require("express");    // 引入express模块
const mysql = require('mysql');

const app=express(); 
const fs=require("fs");              // 引入fs模块
// const url=require("url");
const db = new mysql({
	host: "localhost",
	user: 'root',
	pass: '',
	database: 'cl',
	port: 3306
})
var bodyParser = require('body-parser')               // 实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)    // 指定端口;
app.get('/',function(req, res){      // 匹配主页的get请求
    res.send("首页")
})
app.post('/login', function(req, res){
	let a = db.query('select * from cl;');
	console.log(a);
					// req 发送过来的内容  ,res响应回去的内容     
	if(req.body.username === '' || req.body.password === '') {
		res.send({
			'code': 1,
			'msg': '用户名或密码不能为空'
		})
	}else if(req.body.username !== 'admin' || req.body.password !== '000000'){
		res.send({
			'code':2,
			'msg':"用户名或密码错误"
		})
	}else{
		res.send({
			'code':0,
			'msg':"登录成功"
		})
	}
	
})
