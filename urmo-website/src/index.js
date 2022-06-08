import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/About/About';
import History from './components/History/History';
import Team from './components/Team/Team';
import Resources from './components/Resources/Resources';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/ >} />
            <Route path="/about" element={<About/ >} />
            <Route path="/history" element={<History/ >} />
            <Route path="/team" element={<Team/ >} />
            <Route path="/resources" element={<Resources/ >} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
