import * as React  from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { MenuItem } from '@mui/material'
/* import Home from '../../Home'
import MyProgress from '../../ExpenseTracking' */

const Pages = ['Home', 'MyProgress']
const settings = ['Login', 'Register', 'Reset']

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography 
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: {xs: 'none', md: "flex"}}}
                    >
                        Habit Tracker
                </Typography>
                <Box sx={{ flexGrow: 1,  display: {xs: "flex", md: 'none'} }} >
                    <IconButton
                        size='large'
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenUserMenu}
                        color="inherit" >
                            <MenuIcon />
                        </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'}

                        }} >
                            {Pages.map((page) => (
                                <MenuItem key={page} >
                                    <Typography textAlign="center" variant="h6">{page}</Typography> 
                                </MenuItem>
                            ))}
                        </Menu>
                </Box>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ flexGrow: 1,  display: {xs: 'flex', md: 'none'} }}>
                        Habit Tracker
                    </Typography>
                <Box sx={{ flexGrow: 4, display: {xs: 'none', md: 'flex'} }} >
                    {Pages.map((page) => (
                        <Button 
                        key={page} 
                      
                         sx={{ my: 2, color: 'white', display: 'block'}}>
                             {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src='' /> 
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                            {settings.map((settings) => (
                                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" variant="h6">{settings}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar