import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Input, Button } from 'antd'
import firebase from '../helpers/firebase'
import { AuthContext } from '../App'

function Signup() {
  let history = useHistory()
  const { setUser } = useContext(AuthContext)
  const handleSignup = ({ email, password }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
      title="Please Signup"
      visible={true}
      footer={null}
      onCancel={handleCancel}>
        <Form
          name="Signup"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSignup}
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
              Signup
            </Button>
          </Form.Item>
        </Form>
    </Modal>
  )
}

export default Signup