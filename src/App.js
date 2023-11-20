import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';

const defaultTheme = createTheme();

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            {/* <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
                            {/* <Route path='/' element={<Home />} /> */}
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
