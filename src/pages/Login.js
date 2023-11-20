import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

import axios from "axios"

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to='/' replace />
    }

    const API = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: false,
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('')
        try {
            const res = await API.post('api/users/login', {
                email, password
            }).then(res => {
                console.log(res);
                if (res.data) {
                    const data = res.data;
                    setEmail('');
                    setPassword('');
                    localStorage.setItem("token", data.token);
                    setIsAuthenticated(true);
                    <Navigate to='/' replace />
                } else {
                    console.log('incorrect submission');
                    setError(res.error);
                }
            })
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return <>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    </>
}
export default Login;