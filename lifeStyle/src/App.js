import './App.css';
import { Food } from './components/Food';
import Clock from './components/Clock';
import { Typography } from '@mui/material';
import { GradientBox, HeaderBox, MainBox } from './const_UI';
function App() {
    return (
        <GradientBox>
            <HeaderBox>
                <Clock />
            </HeaderBox>
            <MainBox>
                <Typography variant="h2" lineHeight="2">
                    Образ жизни
                </Typography>
                <Food />
            </MainBox>
        </GradientBox>
    );
}

export default App;
