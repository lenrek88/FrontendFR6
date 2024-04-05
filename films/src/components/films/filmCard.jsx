import { Box, Card, CardMedia, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { srcImagePoster } from './const';

export default function FilmCard({
    img,
    title,
    vote_average,
    itemId,
    isFavorite,
}) {
    const itId = `/Film/${itemId}`;
    const favoriteIconColor = isFavorite ? '#F9A825' : 'gray';

    return (
        <>
            <Link to={itId} style={{ textDecoration: 'none' }}>
                <Box
                    display="flex"
                    width="460px"
                    flexDirection="column"
                    alignItems="flexStart"
                    gap="16px"
                >
                    <Card
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        alignSelf="stretch"
                    >
                        <CardMedia
                            component="img"
                            height="289"
                            image={`${srcImagePoster}${img}`}
                            alt="img"
                        />

                        <CardHeader
                            display="flex"
                            alignSelf="stretch"
                            alignItems="center"
                            padding="16px"
                            title={title}
                            subheader={`Рейтинг: ${vote_average}`}
                            action={
                                <IconButton>
                                    <StarIcon
                                        sx={{ color: favoriteIconColor }}
                                    ></StarIcon>
                                </IconButton>
                            }
                        ></CardHeader>
                    </Card>
                </Box>
            </Link>
        </>
    );
}
