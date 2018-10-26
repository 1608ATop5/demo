<template>
	<div class="user">
		<h1>用户注册</h1>
		<p style = "color:red;" class = 'title'>{{title}}</p>
		<input type="text" v-model = 'userName' placeholder="用户名"/>
		<input type="text" v-model='passwd' placeholder="密码"/>
		<!--性别-->
		<label>
			<p>性别<input type="radio" name="sex" value='0' v-model='sex'/>男
                <input type="radio" name="sex" value='1' v-model='sex'/>女
			</p>
		</label>
		<!--爱好-->
		<label>
			<p>爱好:</p>
			<p>
				<input type="checkbox" @click = 'area($event,type,likeType)' :checked='likeType.length==2'/>全选
				<div>
					<label v-for='item in type'>
					<input type="checkbox" :value= 'item.val' v-model='likeType'/>{{item.text}}
					</label>
				</div>
			</p>
		</label>
		<!--条款-->
		<label>
			<input type="checkbox" v-model = "read"/>条款已阅读
		</label>
		<div>
			<select v-model='city'>
				<option  v-for="item,index in arr" :value='item' selected='selected'>{{item}}</option>
			</select>
		</div>
		<div class = "veri">
			<span class = 'veri-info' @click = "random">{{rand}}</span>
			<input type="text" class = 'veri-input' placeholder = "请输入验证码" v-model ='val'/>
		</div>
		<button type='button' class = "btn" :class = "{active:read}" @click='login' :disabled="!read">注册</button>
		<p class = "toNav">
			<router-link to='/MyLogin'>去登录</router-link>
		</p>
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
				read:"flase",
				are:false,
				sex:"0",
				rand:"null",
				val:"",
				likeType:[],
				type:[{
						val:"0",
						text:"睡觉"
					},
					{
						val:"1",
						text:"吃饭"
					}],
				arr:['淮南','淮北','宿州'],
				city:0
			}
		},
		mounted(){
			this.random();
		},
		methods:{
			login(){
				let parmas = {
					username:this.userName,
					password:this.passwd,
					sex:this.sex,
					likeType:this.likeType,
					city:this.city
				}
				
				if(this.val === this.rand){
					axios.post('/apis/reg',parmas).then(res=>{
						this.title = res.data.msg;
						console.log(res);
						this.random();
					})
					
				}else{
					this.title = "验证码错误"
				}
				console.log(parmas);
			},
			area(e,obj,obj2){
				let val = e.target.checked;
				if(val){
					obj.forEach(item => {
						this.likeType.push(item.val);
					})
				}else{
					this.likeType = [];
				}
			},
			random(){
				let [...a] = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
				let str = ''
				for(let i=0;i<4;i++){
					let random = Math.floor(Math.random()*36);
					str += a[random];
				}
				this.rand = str;
			}
		}
	}
</script>

<style lang="scss">
	.veri{
		display:flex;
		flex-direction:row;
		align-items:center;
		width:100%;
		height:50px;
		justify-content: space-around;
		.veri-info{
			display:inline-block;
			width:200px;
			height:50px;
			background:#ddd;
			text-align:cetner;
			line-height:50px;
			font-size:30px;
		}
	}
	.title{
		color:red;
		height:21px;
		margin:0;
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
		input[type='text']{
			width:100%;
			margin:10px 0;
			height:34px;
			text-indent:.5em;
			border:none;
			outline:none;
			border:1px solid transparent;
			background:#f4f4f4;
		}
		input[type='text']:hover{
			border:1px solid #008000;
		}
		input[type='checkbox']{
			width:15px;
			height:15px;
		}
		input[type='radio']{
			width:15px;
			height:15px;
		}
		.btn{
			width:100%;
			height:40px;
			background: gray;
			color:#fff;
			border:none;
			outline: none;
			font-size:16px;		
			transition:all 1s;
		}
		.btn.active{
			background: #0098ff;
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