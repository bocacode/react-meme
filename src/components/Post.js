import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Input, Button } from 'antd'
import { AuthContext } from '../App'

function Post() {
  let history = useHistory()
  const { user } = useContext(AuthContext)
  const postMeme = (values) => {
    console.log(values)
    // TODO: send POST to API
  }
  return (
    <Modal
      title="Add a Meme"
      visible={true}
      footer={null}
      onCancel={() => history.push('/')}>
      <Form
        name="add-meme"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={postMeme}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter a title' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Url"
            name="imageUrl"
            rules={[{ required: true, message: 'Please include an image URL' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Creator"
            name="creator">
            <Input defaultValue={user.displayName} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add Meme
            </Button>
          </Form.Item>
      </Form>
    </Modal>
  )
}

export default Post