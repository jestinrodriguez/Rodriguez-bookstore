import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails.js";
import BookDetails from "./components/BookDetails/BookDetails.js";
import Footer from "./components/Footer/Footer.js";
import NotFound from "./components/NotFound/NotFound";
import Modal from "./components/Modal/Modal.js";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book/detail/:id">
          <BookDetails />
        </Route>
        <Route path="/author/detail/:id">
          <AuthorDetails />
        </Route>
        <Route path="/test">
          <Modal />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
