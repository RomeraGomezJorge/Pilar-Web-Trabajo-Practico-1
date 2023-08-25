import {SideBar} from './SideBar';
import {TopBar} from './TopBar';
import {Box} from '@mui/material';
import * as React from 'react';
import {ReactNode, useState} from 'react';

interface Props {
  children: ReactNode
  menuTitleSelected?: string
}

export const drawerWidth = 240

export function Layout({children, menuTitleSelected}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsSideBarOpen(false);
  }

  const handleDrawerOpen = () => {
    setIsSideBarOpen(true);
  }

  return (
    <Box sx={{display: 'flex', backgroundColor: '#f6f6f6'}}>
      <TopBar
        handleDrawerOpen={handleDrawerOpen}
        menuTitleSelected={menuTitleSelected}
      />
      <SideBar
        handleDrawerClose={handleDrawerClose}
        open={isSideBarOpen}
      />
      <Box sx={{
        width: '100%',
        mt: 12,
        ml: 5,
        mr: 5
      }}>
        {children}
      </Box>
    </Box>
  )
}