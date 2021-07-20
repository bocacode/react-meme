
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import MemeList from "./components/MemeList"
import Menubar from "./components/Menubar"
import Login from './components/Login'
import Signup from './components/Signup'
import Post from './components/Post'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menubar />
        </Header>
        <Content style={{ padding: '50px' }}>
          <MemeList />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/post" component={Post} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          &copy; 2021 Boca Code
        </Footer>
      </Layout>    
    </Router>
  )
}

export default App
