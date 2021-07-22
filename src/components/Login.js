import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Input, Button } from 'antd'
import firebase from '../helpers/firebase'
import { AuthContext } from '../App'

function Login() {
  let history = useHistory()
  const { setUser } = useContext(AuthContext)
  const handleLogin = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user)
        setUser(res.user)
        history.push('/')
      })
      .catch(err => {
        console.error(err)
        alert(err.message)
      })
  }
  const handleCancel = () => {
    history.push('/')
  }
  return (
    <Modal
      title="Please Login"
      visible={true}
      footer={null}
      onCancel={handleCancel}>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleLogin}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter a valid email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
    </Modal>
  )
}

export default Login