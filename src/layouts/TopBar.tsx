import * as React from 'react';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/material/styles';
import {Box, Breadcrumbs} from '@mui/material';
import {Link} from 'react-router-dom';
import {PopMenu} from './PopMenu';

interface Props {
  handleDrawerOpen(): void
  menuTitleSelected?: string
}

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
}

const AppBar = styled(
    MuiAppBar,
    // Specifies that all props except for open should be forwarded to the underlying MuiAppBar
    {shouldForwardProp: (prop) => prop !== 'open',})<AppBarProps>(
  () => ({
    color: '#2e3b4e',
    boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    '& .MuiBreadcrumbs-li .MuiTypography-root': {
      color: '#2e3b4e'
    },
    '& .MuiSvgIcon-root': {
      color: '#2e3b4e'
    }
  })
);

export const TopBar = ({handleDrawerOpen, menuTitleSelected}: Props) => {

  return (
    <AppBar open>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{mr: 2, alignItems: 'flex-start'}}
        >
          <MenuIcon/>
        </IconButton>
        <Typography sx={{fontWeight: 'bold', fontSize: '20px'}}>
          Pilar Web
        </Typography>
        <Typography sx={{fontSize: '16px', p: 2}}>
          |
        </Typography>
        <Box sx={{flexGrow: 1}}>

          <Breadcrumbs separator="›">
            <Link to="/" style={{textDecoration: 'none'}}>
              <Typography sx={{fontWeight: 'bold'}}>
                Dashboard
              </Typography>
            </Link>
            {menuTitleSelected &&
                <Typography sx={{fontWeight: 'bold'}}>{menuTitleSelected}</Typography>
            }
          </Breadcrumbs>
        </Box>
        <PopMenu/>
      </Toolbar>
        </AppBar>
    )
        ;
}