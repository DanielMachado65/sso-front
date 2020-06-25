import React from 'react'

const Login = () => {
  return (
    <div className="content">
      <div className="login-form">
        <div className="login-logo"><span>logo</span></div>
        <div className="form">
          <form>
            <input placeholder="nome" type="text"/>
            <input placeholder="password" type="password"/>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Login;