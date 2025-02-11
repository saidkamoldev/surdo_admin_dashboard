// import logo from './logo.svg';
// import './App.css';

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
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//     return (
//         <Router>
//             <div>
//                 <Routes>
//                     <Route exact path="/" element={<Login />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SupportChat from './components/SupportChat'; // Yangi chat komponentini import qilish

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/support-chat" element={<SupportChat />} /> {/* Yangi yo'l */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
