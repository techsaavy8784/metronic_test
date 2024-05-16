import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Stack } from '@mui/material';
import { activities } from '../constants/contents';

export default function VerticalLinearStepper() {

    return (
        <Stack flexDirection="row" sx={{ maxWidth: 400 }}>
            <Stepper orientation="vertical">
                {activities.map((step, index) => (
                    <Step key={index}>
                        <Stack flexDirection="row" alignItems="center">
                            <PanoramaFishEyeIcon sx={{
                                color: step.textColor
                            }} />
                            <Stack flexDirection="row" gap={2} alignItems="cemter">
                                <Typography variant='caption' color="#252f4a">
                                    {step.time}
                                </Typography>
                                <Typography variant='caption' color="#071437bf" fontWeight={600}>
                                    {step.activity}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}