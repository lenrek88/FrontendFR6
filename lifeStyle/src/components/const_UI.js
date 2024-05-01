import {
    styled,
    Box,
    TableCell,
    TableRow,
    tableCellClasses,
} from '@mui/material';

export const ClockBox = styled(Box)`
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    color: #daf6ff;
    text-shadow:
        0 0 20px rgba(10, 175, 230, 1),
        0 0 20px rgba(10, 175, 230, 0);
`;

export const DateBox = styled(Box)`
    letter-spacing: 0.1em;
    font-size: 24px;
    margin-top: 12px;
`;

export const TimeBox = styled(Box)`
    letter-spacing: 0.05em;
    font-size: 80px;
`;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        fontSize: 'calc(10px + 2vmin)',
        minWidth: 'calc(80px + 2vmin)',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 'calc(10px + 2vmin)',
        color: theme.palette.common.white,
        textAlign: 'center',
    },
}));

export const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child tr, &:last-child th': {
        border: 0,
    },
}));
