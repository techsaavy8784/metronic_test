import { Box, Grid, IconButton, Typography } from '@mui/material';
import Chart, { useChart } from './charts/index';
import { salesProgress, salesProgressChart } from '../constants/contents';
import { PiSquaresFourDuotone } from "react-icons/pi";

export default function SalesProgress() {
    const chartOptions = useChart({
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        tooltip: {
            y: {
                formatter: (value: number) => `$ ${value} thousands`,
            },
        },
        plotOptions: { bar: { columnWidth: '36%' } },
    });

    return (
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 4,
                px: 3,
                pb: 10,
                pt: 3,
                flexDirection: 'column',
                color: '#071437',
                backgroundColor: "#17c653",
                position: 'relative',
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
                        color="white"
                    >
                        Sales Progress
                    </Typography>
                </Box>
                <IconButton>
                    <PiSquaresFourDuotone size={15} color="#fff" />
                </IconButton>
            </Box>
            <Chart dir="ltr" type="bar" series={salesProgressChart}
                options={chartOptions} width="100%" height={320} />
            <Grid
                container
                sx={{
                    borderRadius: 3.5,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "white",
                    py: 6,
                    px: 5,
                }}>
                {
                    salesProgress.map((item, index) => (
                        <Grid item xs={6} key={index}>
                            <Typography variant='caption' color="#99a1b7">{item.title}</Typography>
                            <Typography variant='h6'>${Number(item.amount).toLocaleString()}</Typography>
                        </Grid >
                    ))
                }
            </Grid>
        </Box>
    );
}
