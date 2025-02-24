//import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
function App() {
return (
<Router >
<Routes>
<Route path="/" exact>
<LoginPage />
</Route>
<Route path="/cards" exact>
<CardPage />
</Route>
<Navigate to="/" />
</Routes>
</Router>
);
}
export default App;