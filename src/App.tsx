import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "./pages/404";
import HomePage from "./pages/Home";

export default function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NotFound} />
        
      </Switch>
    </Router>
  );
}
