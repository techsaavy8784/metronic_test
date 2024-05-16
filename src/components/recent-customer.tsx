import { useTheme } from '@mui/material/styles';
import Chart, { useChart } from './charts';
import { Box, Typography } from '@mui/material';
import { recentCustomersChart } from '../constants/contents';

export default function RecentCustomers() {
    const theme = useTheme();

    const chartOptions = useChart({
        stroke: { show: false },
        yaxis: {
            labels: {
                formatter: (value: number) => `${value.toFixed(0)}%`,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2011-01-01',
                '2011-02-01',
                '2011-03-01',
                '2011-04-01',
                '2011-05-01',
                '2011-06-01',
                '2011-07-01',
                '2011-08-01',
                '2011-09-01',
                '2011-10-01',
                '2011-11-01',
                '2011-12-01',
                '2012-01-01',
                '2012-02-01',
                '2012-03-01',
                '2012-04-01',
                '2012-05-01',
                '2012-06-01',
                '2012-07-01',
                '2012-08-01',
                '2012-09-01',
                '2012-10-01',
                '2012-11-01',
                '2012-12-01',
                '2013-01-01',
                '2013-02-01',
                '2013-03-01',
                '2013-04-01',
                '2013-05-01',
                '2013-06-01',
                '2013-07-01',
                '2013-08-01',
                '2013-09-01',
            ],
        },
        plotOptions: {
            bar: {
                columnWidth: '58%',
                colors: {
                    ranges: [
                        { from: -100, to: -46, color: theme.palette.warning.main },
                        { from: -45, to: 0, color: theme.palette.info.main },
                    ],
                },
            },
        },
    });

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
                        Recent Customers
                    </Typography>
                    <Typography
                        variant='caption'
                        fontWeight={500}
                        sx={{ color: '#99a1b7' }}
                    >
                        More than 500 new customers
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
                    <Typography variant='caption' fontWeight={600} sx={{ color: '#99a1b7' }}>Year</Typography>
                    <Typography variant='caption' fontWeight={600} sx={{ color: '#99a1b7' }}>Month</Typography>
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
                        Week
                    </Typography>
                </Box>
            </Box>
            <Chart dir="ltr" type="bar" series={recentCustomersChart} options={chartOptions} width="100%" height={320} />
        </Box>
    );
}
