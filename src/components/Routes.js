import { Route } from "react-router-dom";
import Tracker from "./Tracker";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";


const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home}></Route> 
      <Route path="/tracker" component={Tracker}></Route>
      <Route path="/about" exact component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
    </>
  );
};

export default Routes;
