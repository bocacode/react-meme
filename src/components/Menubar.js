import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

function Menubar() {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key={1}><NavLink exact to="/">Home</NavLink></Menu.Item>
      <Menu.Item key={2}><NavLink to="/post">Post</NavLink></Menu.Item>
      <Menu.Item key={3}><NavLink exact to="/">My Memes</NavLink></Menu.Item>
      <Menu.Item key={4}><NavLink to="/login">Login</NavLink></Menu.Item>
    </Menu>
  )
}

export default Menubar
