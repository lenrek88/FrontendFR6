import { Box } from "@mui/material";
import FilmCard from "./filmCard";

export default function FilmGrid() {
    return(
        <Box sx={{display: 'flex', alignItems: 'flex-start', alignContent: 'flex-start', flex: '1 0 0', alignSelf: 'stretch', flexWrap: 'wrap', gap: "16px"}}>
            <FilmCard ></FilmCard>
        </Box>
    );
}