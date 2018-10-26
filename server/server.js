const express=require("express");    // 引入express模块
const app=express(); 
const fs=require("fs");              // 引入fs模块
// const url=require("url");
const mysql = require('mysql');
const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	pass:"",
	database: 'some',
	port: 3306
})

var bodyParser = require('body-parser')               // 实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)    // 指定端口;
app.get('/',function(req, res){      // 匹配主页的get请求
	res.send("首页");
})
// 登陆
app.post('/login', function(req, res){
		// req 发送过来的内容  ,res响应回去的内容     
	db.query(`SELECT * FROM cl`,(err,body)=>{
		if(err){
			console.log(err);
		}else{
			let sumIndex = null;
			for(let i=0;i<body.length;i++){
				if(req.body.username === body[i].name){
					sumIndex =i;
				}
			}
			if(sumIndex){
				if(req.body.password === body[sumIndex].pass){
					res.send({
						'code':0,
						'msg':"登陆成功"
					})
				}else{
					res.send({
						'code':2,
						'msg':"密码错误"
					})
				}
			}else{
				res.send({
					'code':2,
					'msg':"用户名不存在"
				})
			}
		}
	})
})
// 注册
app.post('/reg', function(req, res){
	db.query(`SELECT * FROM cl`,(err,body)=>{
		if(err){ 
			console.log(err)
		}else{
			let sum = body[body.length-1].id;
			sum++;
			let sumIndex = null;
			for(let i=0;i<body.length;i++){
				if(req.body.username === body[i].name){
					sumIndex = i;
				}
			}
			if(!sumIndex){
				db.query(`INSERT INTO cl VALUES('${sum}','${req.body.username}','${req.body.password}');`,(err,body)=>{
					if(err){
						console.log("err");
					}else{
						res.send({
							code:0,
							msg:"注册成功"
						})
					}
				})
			}else{
				res.send({
					code:2,
					msg:"用户名已存在"
				})
			}
		}
	})
})

app.post('/phone',function(req,res){
	let iphone = /^1[34578]\d{9}$/;
	if(!req.body.phone){
		res.send({
		code:1,
		msg:"手机号不能为空"
		})
	}else if(phone.test(this.phone)){
		res.send({
			code:0,
			msg:"手机验证码成功",
			rem:123
		})
	}else{
		res.send({
			code:2,
			msg:"手机号不正确"
		})
	}
})

app.get('/hotData',function(req,res){
	fs.readFile('../static/json/hotDatas.json',(err,body)=>{
		if(err){
			res.send("文件读取失败")
		}else{
			if(JSON.parse(body).length=0){
				res.send("暂无数据")
			}else{
				res.send(JSON.parse(body));
			}
		}
	})
})
