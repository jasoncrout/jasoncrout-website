import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './routes/App';
import AboutMe from './routes/AboutMe';
import MyProjects from "./routes/MyProjects";
import ContactMe from "./routes/ContactMe";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="my-projects" element={<MyProjects />} />
      <Route path="contact-me" element={<ContactMe />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


//import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
