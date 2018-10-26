<template>
	<div class="user">
		<h1>用户登录</h1>
		<p style='color:red;'>{{title}}</p>
		<input type="text" v-model = 'userName' placeholder="用户名"/>
		<input type="text" v-model='passwd' placeholder="密码"/>
		<button class = "btn" @click='login'>登录</button>
		<p class = "toNav">
			<router-link to='/MyReg'>去注册</router-link>
		</p>
		<p>{{tit}}</p>
		<input type="text" v-model='phone' placeholder="手机号"/>
		<input type="text" placeholder="请输入验证码"/>
		<div class = "getVeri" v-show='veriShow' @click ='getS'>获取验证码</div>
		<div class = "getVeri" v-show='!veriShow'>{{second}}s后重新发送</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				userName:"",
				passwd:"",
				title:"",
				veriShow:true,
				phone:"",
				second:6,
				tit:""
			}
		},
		mounted(){
			let user = window.localStorage.getItem("user");
			if(user){
				this.$router.push({
		            path:"/MyHot"
		        })
			}
		},
		methods:{
			login(){
				axios.post('/apis/login',{
					username:this.userName,
					password:this.passwd
				}).then(res=>{
					console.log(res);
					if(res.data.code == 0){
						window.localStorage.setItem("user",this.userName);
						setTimeout(()=>{
							this.$router.push({
					            path:"/MyHot"
					        })
						},2000)
					}
					this.title = res.data.msg;
				})
			},
			getS(){
				if(!this.phone){
					this.tit = "手机号不能为空"
				} else if ((/^1[34578]\d{9}$/.test(this.phone))) {
					this.veriShow = false;
					this.tit='';
					axios.post('/apis/phone',{
						phone:this.phone
					}).then(res=>{
						this.tit = res.data.msg;
						let timer = setInterval(()=>{
							this.second--;
							if(this.second <= 0){
								clearInterval(timer);
								this.second = 6;
								this.veriShow = true;
							}
						},1000)
					})
				}else{
					this.tit = '手机号不正确'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.getVeri{
		background:#ddd;
		height:50px;
		line-height:50px;
	}
	.user{
		width:calc(100% - 40px);
		padding:50px 20px 0 20px;
		font-size:16px;
		margin-top: 60px;
		h1{
			text-align:center;
			font-size:30px;
			margin-bottom:20px;
		}
		input{
			width:100%;
			margin:10px 0;
			height:34px;
			text-indent:.5em;
			border:none;
			outline:none;
			background:#f4f4f4;
			border:1px solid transparent;
		}
		input[type='text']:hover{
			border:1px solid #008000;
		}
		.btn{
			width:100%;
			height:40px;
			background: #0098ff;
			color:#fff;
			border:none;
			outline: none;
			font-size:16px;		
		}
		.toNav{
			text-align:center;
			a{
				display:block;
				margin:20px 0;
				font-size:16px;
				color:#0096e0;
			}
		}
		
	}
</style>