import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import MemeList from "./components/MemeList";
import Menubar from "./components/Menubar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/Post";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout className="layout">
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menubar />
          </Header>
          <Content style={{ padding: "100px 50px" }}>
            <MemeList />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/post" component={Post} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>&copy; 2021 Boca Code</Footer>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
