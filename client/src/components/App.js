import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Register from "./Register";
import Login from "./Login";
import Comment from "./Comment";
import Rmenu from "./Rmenu";
import ScrollToTop from 'react-router-scroll-top';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
          <Route path="/add-comment" component={Comment} />
          <Route path="/rmenu" component={Rmenu} />
        </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}


export default App;

