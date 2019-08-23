import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import Home from './home/home';

class App extends Component {
  render() {
    return(
      <div className="">
        <div className="topheader text-center">
          <header className="container">
            <nav className="navbar">
                {/* <h2>Imagine your beauty</h2> */}
            </nav>
          </header>
        </div>
        <section className="">
          <div className="container">
            <h1></h1>
          </div>
          <div className="">
            <Home />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;