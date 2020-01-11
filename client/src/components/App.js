import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import Navbar from "./Navbar";
import Rmenu from "./Rmenu";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Register from "./Register";
import Login from "./Login";
// const Home = lazy( () => import("./Home"));
 //const About = lazy( () => import("./About"));
// const Blog = lazy( () => import("./Blog"));
// const Resume = lazy( () => import("./Resume"));
// const Contact = lazy( () => import("./Contact"));
// const Navbar = lazy( () => import("./Navbar"));
// const Rmenu = lazy( () => import("./Rmenu"));
// const TermsOfService = lazy( () => import("./TermsOfService"));
// const PrivacyPolicy = lazy( () => import("./PrivacyPolicy"));
// const Register = lazy( () => import("./Register"));
// const Login = lazy( () => import("./Login"));

function App() {
  const [change, setchange] = useState(false);
  const handleClick = ()=>{
    setchange(!change);
    console.log(!change);
    }
let rmenu; 

if(change){
  rmenu = <Rmenu handleClick={handleClick}/>;
}
  return (
    <div className="App">
      <Router>
        <Navbar handleClick={handleClick}/>
        {rmenu}
        <ScrollToTop> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        </ScrollToTop>
        
        </Router>  
    </div>
  );
}
export default App;

