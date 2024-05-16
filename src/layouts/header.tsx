import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container, Grid, IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { HiOutlineMenu } from 'react-icons/hi'
import { BiSolidNotification } from 'react-icons/bi'
import { BsSunFill } from 'react-icons/bs'
import { IoMdPerson } from "react-icons/io";
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 10px 30px 0px',
          py: 1,
          px: 5,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar>
          <Container>
            <Grid container justifyContent="space-around">
              <Grid item lg={2} sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <IconButton onClick={toggleDrawer(true)}>
                  <HiOutlineMenu size={28} color="black" />
                </IconButton>
                <img
                  src="https://preview.keenthemes.com/metronic8/demo18/assets/media/logos/default-small.svg"
                  alt="logo"
                  width={45}
                  height={45}
                />
              </Grid>
              <Grid item lg={7}>
                <TextField
                  placeholder='search...'
                  size='small'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    backgroundColor: "#f9f9f9",
                    display: { md: "none", xl: "flex", sm: "none", xs: "none" },
                    borderRadius: 3,
                    outline: "none",
                    "& fieldset": { border: 'none' },
                    width: "400px",
                    "& .MuiFilledInput-root.Mui-focused": {
                      backgroundColor: "#ececec"
                    }
                  }}
                />
              </Grid>
              <Grid item lg={3} alignItems="center">
                <Stack flexDirection="row" gap={2} justifyContent="flex-end" alignItems="center">
                  <Button sx={{
                    color: "#17c653",
                    backgroundColor: "#dfffea",
                    borderRadius: 5,
                    textTransform: 'none',
                    py: 1,
                    px: 2.5,
                    fontWeight: 600,
                    ":hover": {
                      color: "#fff",
                      backgroundColor: "#17c653"
                    }
                  }}>
                    Create
                  </Button>
                  <IconButton>
                    <BiSolidNotification size={25} color="#99a1b7" />
                  </IconButton>
                  <IconButton>
                    <BsSunFill size={25} color="#99a1b7" />
                  </IconButton>
                  <IconButton>
                    <IoMdPerson size={25} color="#99a1b7" />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}
