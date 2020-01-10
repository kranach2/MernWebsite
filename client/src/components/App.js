import React, { useState, Suspense, lazy} from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./About";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Register from "./Register";
import Login from "./Login";
import Rmenu from "./Rmenu";
import ScrollToTop from 'react-router-scroll-top';
const AsyncHome = lazy( () => import("./Home"));
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
      <Suspense fallback={<div> Loading..... </div>}>
      <Router>
        <Navbar handleClick={handleClick}/>
        {rmenu}
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          
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
      </Suspense>
    </div>
  );
}


export default App;

