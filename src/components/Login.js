import React from 'react'
import { useHistory } from 'react-router-dom'
import { Modal } from 'antd'

function Login() {
  let history = useHistory()
  const handleLogin = () => {
    history.push('/')
  }
  const handleCancel = () => {
    history.push('/')
  }
  return (
    <Modal
      title="Please Login"
      visible={true}
      onOk={handleLogin}
      onCancel={handleCancel}>
        <p>Login form goes here...</p>
    </Modal>
  )
}

export default Login