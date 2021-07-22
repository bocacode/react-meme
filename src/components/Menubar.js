import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { AuthContext } from '../App'

function Menubar() {
  const { user } = useContext(AuthContext)
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key={1}><NavLink exact to="/">Home</NavLink></Menu.Item>
      {user
        ? <>
          <Menu.Item key={2}><NavLink to="/post">Post</NavLink></Menu.Item>
          <Menu.Item key={3}><NavLink exact to="/">My Memes</NavLink></Menu.Item>
        </>
        : <>
          <Menu.Item key={4}><NavLink to="/login">Login</NavLink></Menu.Item>
          <Menu.Item key={5}><NavLink to="/signup">Signup</NavLink></Menu.Item>
        </>
      }
    </Menu>
  )
}

export default Menubar
