import * as React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import { RiArrowRightLine } from 'react-icons/ri'
import { authors } from '../constants/contents'

export default function AuthorEarnings() {
    return (
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                px: '30px',
                py: '20px',
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
                        Authors Earnings
                    </Typography>
                    <Typography
                        variant='caption'
                        fontWeight={500}
                        sx={{ color: '#99a1b7' }}
                    >
                        More than 400 new authors
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        '& .MuiBox-root': {
                            fontSize: '0.75rem',
                            fontWeight: '600',
                        },
                    }}
                >
                    <Typography
                        variant='caption'
                        fontWeight={600}
                        sx={{ color: "#99a1b7" }}
                    >
                        Month
                    </Typography>
                    <Typography variant='caption' fontWeight={600} sx={{ color: '#99a1b7', }}>Week</Typography>
                    <Typography
                        variant='caption'
                        fontWeight={600}
                        textAlign="center"
                        borderRadius={3}
                        sx={{
                            color: '#252f4a',
                            backgroundColor: '#f1f1f4',
                            py: 1,
                            px: 2
                        }}>Day</Typography>
                </Box>
            </Box>
            {
                authors.map((item: any, index) => {
                    return (
                        <Grid
                            container
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 2,
                            }}
                        >
                            <Grid
                                item
                                xs={6}
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
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        sx={{ color: '#99a1b7' }}
                                    >
                                        {item.role}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3} >
                                <Stack direction="column">
                                    <Typography
                                        variant='caption'
                                        sx={{ fontWeight: '600', color: '#99a1b7' }}
                                    >
                                        Paid
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{ fontWeight: '600', color: '#252f4a' }}
                                    >
                                        ${item.paid}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1}>
                                <Stack flexDirection="row" justifyContent="flex-end">
                                    <Typography
                                        variant='caption'
                                        borderRadius={2}
                                        fontWeight={600}
                                        sx={{
                                            color: item.percent > 0 ? "#f8285a" : "#17c653",
                                            px: 1,
                                            py: 0.5,
                                        }}
                                    >
                                        {item.percent > 0 ? (
                                            "+" + item.percent
                                        ) : (
                                            item.percent
                                        )}
                                    </Typography>
                                </Stack>

                            </Grid>
                            <Grid item xs={2} >
                                <Stack flexDirection="row" justifyContent="flex-end">

                                    <IconButton aria-label="delete" sx={{
                                        backgroundColor: '#f9f9f9'
                                    }}>
                                        <RiArrowRightLine color='#99a1b7' size={20} />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Box >
    )
}
