import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Subject } from './components/subject/Subject';
import { Login } from './components/login/Login';
import './App.css';
import { Topic } from './components/topic/Topic';
import { Test } from './components/test/Test';
import { Class } from './components/class/Class';
import { Main } from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main/>
          }
        />
        <Route
          path="/subject"
          element={
            <Subject/>
          }
        />
        <Route
          path="/topic/:class_id"
          element={
            <Topic/>
          }
        />
        <Route
          path="/class/:subject_id"
          element={
            <Class/>
          }
        />
        <Route
          path="/login"
          element={
            <Login/>
          }
        />
        <Route
          path="/test/:topic_id"
          element={
            <Test/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
