import { Component } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
