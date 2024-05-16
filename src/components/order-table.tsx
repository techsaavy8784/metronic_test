import * as React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { RiArrowRightLine } from 'react-icons/ri'
import { rows } from '../constants/contents'

const OrderTable = () => {
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
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
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
            Latest Products
          </Typography>
          <Typography
            variant='caption'
            fontWeight={500}
            sx={{ color: '#99a1b7' }}
          >
            More than 400 new products
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
            textAlign="center"
            borderRadius={3}
            sx={{
              color: '#071437',
              backgroundColor: '#f1f1f4',
              py: 1,
              px: 2
            }}

          >
            Month
          </Typography>
          <Typography variant='caption' fontWeight={600} sx={{ color: '#99a1b7' }}>Week</Typography>
          <Typography variant='caption' fontWeight={600} sx={{ color: '#99a1b7' }}>Day</Typography>
        </Box>
      </Box>
      {
        rows.map((item: any, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
              }}
            >
              <Box
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
                    sx={{ fontSize: '14px', fontWeight: '600', color: '#071437' }}
                  >
                    {item.title1}
                  </Typography>
                  <Typography
                    sx={{ fontSize: '13px', fontWeight: '600', color: '#99a1b7' }}
                  >
                    {item.title2}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <Typography
                  sx={{ fontSize: '13px', fontWeight: '600', color: '#99a1b7' }}
                >
                  {item.tech}
                </Typography>
                <Typography
                  borderRadius={2}
                  sx={{
                    backgroundColor: '#dfffea',
                    color: '#17c653',
                    fontSize: '12px',
                    fontWeight: '500',
                    px: 1,
                    py: 0.5,
                  }}
                >
                  {item.status}
                </Typography>
                <IconButton aria-label="delete" sx={{
                  backgroundColor: '#f9f9f9'
                }}>
                  <RiArrowRightLine color='#99a1b7' size={20} />
                </IconButton>
              </Box>
            </Box>
          )
        })
      }
    </Box >
  )
}

export default OrderTable