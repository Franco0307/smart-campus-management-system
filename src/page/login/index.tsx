import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import "./index.scss"
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined  } from '@ant-design/icons';
import { login } from "../../api/users";
import { setToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [form]=Form.useForm()
    const [loading,setLoading]=useState<boolean>(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleLogin(){
        form.validateFields().then(async (res)=>{
            setLoading(true)
            const {data:{token,username,btnAuth}}=await login(res);
            setLoading(false)
            dispatch(setToken(token))
            sessionStorage.setItem("username",username)
            sessionStorage.setItem("btnAuth",JSON.stringify(btnAuth))
            navigate("/",{replace:true})
        }).catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }

    return <div className="login" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
            <div className="part">
                <div className="title">
                    <div className="logo">
                        <img src={logo} width={100} />
                    </div>
                    <h1>Pengyuan Smart Park Management Platform</h1>
                </div>
                <Form   
                    form={form}
                >
                    <Form.Item                      
                        name="username"
                        rules={[
                            { required: true, message: 'Username cannot be empty' },                           
                            { pattern:/^\w{4,8}$/,message:"Username must be 4-8 characters alphanumeric"},
                        ]}
                    >
                        <Input placeholder="Please enter your username" prefix={<UserOutlined/>}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Password cannot be empty' }]}
                    >
                        <Input.Password placeholder="Please enter your password" prefix={<LockOutlined/>}/>
                    </Form.Item>
                    <Form.Item >
                        <Button 
                            type="primary" 
                            style={{width:"100%"}}
                            onClick={handleLogin}
                            loading={loading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
}




export default Login