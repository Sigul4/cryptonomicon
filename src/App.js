import { Provider } from "react-redux";
import { Router }   from 'react-router-dom';
import "./App.css";
import { CContent } from "./components/Content";
import { Header }  from "./components/Header.js";
import history      from "./data/history.js";
import store        from "./data/store";


const App = () =>
    <Router history={history}>
      <Provider store={store}>
        <div className="App">
          <Header/>
          <CContent/>
        </div>
      </Provider>
    </Router>

export default App
