import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
      <Box>
          <form onSubmit={loginUser}>
              <TextField 
                id="username_input"
                label="username"
                />
                <TextField
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button name="login" value="login" />
          </form>
      </Box>
  )

  
}

export default Login;
