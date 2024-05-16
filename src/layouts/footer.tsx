import { Stack, Typography } from "@mui/material";
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <Stack flexDirection="row" justifyContent="space-between" mt={10} width="100%" sx={{
            px: 4
        }}>
            <Stack flexDirection="row" justifyContent="center" gap={1}>
                <Typography variant="caption" color="#99a1b7">
                    2024 &copy;
                </Typography>
                <Typography variant="caption" color="black">
                    Keenthemes
                </Typography>
            </Stack>
            <Stack flexDirection="row" gap={1}>
                <Link href="#" underline="none">
                    <Typography variant="caption" fontWeight={600} color="#78829d">
                        About
                    </Typography>
                </Link>
                <Link href="#" underline="none">
                    <Typography variant="caption" fontWeight={600} color="#78829d">
                        Support
                    </Typography>
                </Link>
                <Link href="#" underline="none">
                    <Typography variant="caption" fontWeight={600} color="#99a1b7">
                        Purchase
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}