import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  return (
      <Box>
          <form>
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
                
          </form>
      </Box>
  )

  
}

export default Login;
