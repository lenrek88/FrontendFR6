import { Pagination, Box } from "@mui/material";

export default function Paginations() {
    return (
        <Box sx={{mt: '450px'}}>
            <Pagination count={10} color="primary" />
        </Box>

    );

}