"use client"
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const drawerWidth = '100%'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='md:hidden'>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar sx={{ background: '#fff', boxShadow: 'none' }} position="fixed" open={open}>
                        <Toolbar>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <img className='h-[56px] w-[100px]' src="/img/logoText.png" alt="" />

                                <IconButton
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ ...(open && { display: 'none' }) }}
                                >
                                    <img className='ss:hidden' src="/img/menu.svg" alt="" />
                                </IconButton>
                                <div className='hidden ss:flex text-[16px] text-[#000000] w-[350px] justify-between'>
                                    <a href='#'>категории</a>
                                    <a href='#'>отзывы</a>
                                    <a href='#'>свяжитесь с нами</a>
                                </div>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: 300,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box'
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                <img src="/img/close.svg" alt="" />
                            </IconButton>
                        </DrawerHeader>
                        <div className='flex flex-col justify-center items-center w-full '>
                            <img src="/img/logo.svg" alt="" />

                            <div className='flex flex-col justify-between items-center h-[340px] mt-[30px]' >
                                <div className='text-center'>
                                    <p>категории</p>
                                    <p className='mt-[20px]'>отзывы</p>
                                    <p className='mt-[20px]'>свяжитесь с нами</p>
                                </div>
                                <div className='se:mt-[300px] xr:mt-[460px] mt-[60px] mb-[20px]'>
                                    <div className='flex items-center justify-between w-[190px] mt-[20px]'>
                                        <img src="/img/phone.svg" alt="" />
                                        <p>+998 99 123 33 22</p>
                                    </div>
                                    <div className='flex items-center justify-between w-[190px] mt-[20px]'>
                                        <img src="/img/phone.svg" alt="" />
                                        <p>+998 99 123 33 22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />
                    </Main>
                </Box>
            </div>

            <div className='relative hidden md:block'>
                <div className='forLinks'>
                    <div className='headImg max-w-[1200px] m-auto flex justify-between items-center h-[60px] w-full px-5 py-2'>

                        <img className='w-[100px]' src="/img/logoYellow.png" alt="" />

                        <div className='flex text-[16px] text-[#fff] w-[360px] justify-between'>
                            <a href='#'>наши товары</a>
                            <a href='#'>отзывы</a>
                            <a href='#'>свяжитесь с нами</a>
                        </div>

                        <div className='flex justify-between items-center '>
                            <button className='bg-[#FFCD00] px-3 py-1 text-[#fff] rounded-[14px]'>заказать</button>
                            <div className='flex justify-between items-center w-[80px] ml-[40px]'>
                                <img src="/img/uzbLang.svg" alt="" />
                                <div className='w-[1px] bg-[#FFCD00] h-[30px]'> </div>
                                <img src="/img/ruLang.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;