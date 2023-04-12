import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Search from './components/search/Search';
import Product from './components/product/Product';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
      {/* <Search />
      <Product /> */}
    </>
  );
}

export default App;
