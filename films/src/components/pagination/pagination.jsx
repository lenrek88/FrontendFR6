import { Pagination, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions';

export default function Paginations() {
    const filmPage = useSelector((state) => state.page);
    const dispatch = useDispatch();
    function handleChange(event, value) {
        dispatch(setPage(value));
    }

    return (
        <Box sx={{ mt: '330px' }}>
            <Pagination
                count={500}
                color="primary"
                page={filmPage}
                onChange={handleChange}
            />
        </Box>
    );
}
