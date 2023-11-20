import { notification } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function AuthGuard(props:any) {
    const navigate = useNavigate();
    const userState = useSelector((state:any) => state.userReducer);

    useEffect(() => {
      if(!userState.userInfo) {
        notification.warning({
            message: "Chưa đăng nhập!",
            placement: "topRight"
        })
        navigate("/login")
      }
    },[])

  return (
    <>{props.children}</>
  )
}