import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")}>
        <img alt="logo" height="32" width="30" src='./img/logo.png'/>
    </div>
  )
}
