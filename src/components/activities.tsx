import { Box, IconButton, Typography } from '@mui/material'
import VerticalLinearStepper from './steppers'
import { PiSquaresFourDuotone } from 'react-icons/pi';

export default function Activities() {
  return (
    <Box
      sx={{
        mt: 3,
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        px: 3,
        py: 3,
        flexDirection: 'column',
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
            sx={{ fontSize: '1.15rem', fontWeight: '600', color: '#071437' }}
          >
            Activities
          </Typography>
          <Typography
            sx={{ fontSize: '0.75rem', fontWeight: '500', color: '#99a1b7' }}
          >
            890,344 Sales
          </Typography>
        </Box>
        <IconButton>
          <PiSquaresFourDuotone size={15} color="#1b84ff" />
        </IconButton>
      </Box>
      <Box>
        <VerticalLinearStepper />
      </Box>
    </Box >
  )
}