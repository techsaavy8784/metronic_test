import * as React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import { trends } from '../constants/contents';
import { PiSquaresFourDuotone } from "react-icons/pi";

export default function Trends() {
    return (
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                px: 3,
                py: 3,
                flexDirection: 'column',
                color: '#071437',
                mt: 5,
                boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)"
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '15px',
                }}
            >
                <Box sx={{ flexDirection: 'column' }}>
                    <Typography
                        variant='body1'
                        fontWeight={600}
                        color="#071437"
                    >
                        Trends
                    </Typography>
                    <Typography
                        variant='caption'
                        fontWeight={500}
                        sx={{ color: '#99a1b7' }}
                    >
                        More than 400 new authors
                    </Typography>
                </Box>
                <IconButton>
                    <PiSquaresFourDuotone size={15} color="#1b84ff" />
                </IconButton>
            </Box>
            {
                trends.map((item: any, index) => {
                    return (
                        <Grid
                            container
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 1.5
                            }}
                        >
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3,

                                }}
                            >
                                <Stack
                                    borderRadius={3}
                                    sx={{
                                        py: 1,
                                        px: 1,
                                        backgroundColor: "#f9f9f9"
                                    }}>
                                    <img src={item.icon} alt="logo" width={25} height={25} />
                                </Stack>
                                <Box sx={{ flexDirection: 'column' }}>
                                    <Typography
                                        variant='body2'
                                        fontWeight={600}
                                        sx={{ color: '#071437' }}
                                    >
                                        {item.title1}
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        sx={{ color: '#99a1b7' }}
                                    >
                                        {item.title2}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Stack flexDirection="row" justifyContent="flex-end">
                                    <Typography
                                        variant='caption'
                                        borderRadius={2}
                                        fontWeight={600}
                                        sx={{
                                            color: "#071437",
                                            backgroundColor: "#f9f9f9",
                                            px: 1,
                                            py: 0.5,
                                        }}
                                    >
                                        +{item.percent}$
                                    </Typography>
                                </Stack>

                            </Grid>
                        </Grid>
                    )
                })
            }
        </Box >
    )
}
