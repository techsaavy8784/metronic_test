import { Box, Grid, Stack, Typography } from '@mui/material'
import { contents } from '../constants/contents'
import { useState } from 'react'

export default function Category() {
  const [activeBtn, setActiveBtn] = useState(contents[0]?.title);

  return (
    <>
      <Grid container gap={2} flexWrap="nowrap">
        {contents.map((item: any, index) => {
          const isActive = activeBtn === item.title;
          return (
            <Grid
              item
              lg={2.4}
              md={12}
              key={index}
              py={5}
              px={2}
              alignItems="center"
              justifyContent="center"
              borderRadius={5}
              onClick={() => setActiveBtn(item.title)}
              sx={{
                border: "1px solid #dbdfe9",
                color: isActive ? "white" : '#99a1b7',
                cursor: 'pointer',
                ":hover": {
                  color: 'white',
                  background: '#f8285a'
                },
                backgroundColor: isActive ? "#f8285a" : "transparent",
                boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)"
              }}
            >
              <Stack direction="column" justifyContent="center" alignItems="center" gap={2} >
                <Box>{item.icon}</Box>
                <Typography variant='body2' maxWidth="100px" textAlign="center" fontWeight={600}>{item.title}</Typography>
              </Stack>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}