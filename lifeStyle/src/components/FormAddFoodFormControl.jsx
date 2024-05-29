import { Box, FormControl, TextField, Button } from '@mui/material';

export default function FormAddFoodFormControl({
    value,
    changeValue,
    addToFood,
    clearToFood,
    setFavorites,
}) {
    return (
        <Box>
            <FormControl
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <TextField
                    variant="standard"
                    autoFocus
                    label="Введите штриховой код"
                    sx={{
                        '& label': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#c8ae04',
                            },
                        },
                        input: {
                            color: '#c8ae04',
                            fontSize: 'calc(10px + 2vmin)',
                            width: 'calc(500px + 2vmin)',
                        },
                    }}
                    value={value}
                    onChange={changeValue}
                />
                <Button size="small" variant="contained" onClick={addToFood}>
                    Добавить еду
                </Button>
                <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={clearToFood}
                >
                    Очистить еду
                </Button>
                <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    onClick={(e) => {
                        e.preventDefault();
                        setFavorites(true);
                    }}
                >
                    Избранное
                </Button>
            </FormControl>
        </Box>
    );
}
