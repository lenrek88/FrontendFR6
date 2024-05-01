import { styled, Box } from '@mui/material';

export const GradientBox = styled(Box)`
    background: radial-gradient(ellipse at top, #0f3854 30%, #000000 70%);
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: white;
    min-height: 100vh;
`;
export const HeaderBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const MainBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
