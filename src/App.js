import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
