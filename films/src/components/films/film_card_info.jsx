import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import getCookie from '../../utils/cookie/getCookie';
import { getFormateDate, media_type, srcImagePoster } from './const';

const Token = getCookie('userToken');

const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
    },
};

export default function FilmCardInfo() {
    const { id } = useParams();

    const [filmDetails, setFilmDetails] = useState('');
    const [filmCredits, setFilmCredits] = useState('');
    const [isFavorite, setIsFavorite] = useState(true);
    const userId = getCookie('userId');

    async function favoriteHandler() {
        const body = {
            media_type: media_type,
            media_id: id,
            favorite: isFavorite,
        };
        setIsFavorite((isFavorite) => !isFavorite);
        const options2 = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${Token}`,
            },
            body: JSON.stringify(body),
        };

        try {
            await fetch(
                `https://api.themoviedb.org/3/account/${userId}/favorite`,
                options2
            );
        } catch {
            setIsFavorite((isFavorite) => !isFavorite);
            alert('Ошибка доавбления в избранное. Повторите попытку позднее.');
        }
    }

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?language=ru`,
                    OPTIONS
                );
                setFilmDetails(await data.json());
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, OPTIONS)
            .then((response) => response.json())
            .then((response) => {
                setFilmDetails(response);
            })
            .catch((err) => console.error(err));
    }, [id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=ru`,
            OPTIONS
        )
            .then((response) => response.json())
            .then((response) => {
                setFilmCredits(response);
            })
            .catch((err) => console.error(err));
    }, [id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/account/${userId}/favorite/movies`,
            OPTIONS
        )
            .then((response) => response.json())
            .then((response) => {
                setIsFavorite(
                    response.results.find((items) => items.id === +id)
                        ? false
                        : true
                );
            })
            .catch((err) => console.error(err));
    }, [userId]);

    const imagePoster = `${srcImagePoster}${filmDetails.poster_path}`;
    const favoriteIconColor = isFavorite ? 'gray' : '#F9A825';

    return (
        <div>
            {filmDetails ? (
                <div>
                    <Box
                        mx="24px"
                        my="24px"
                        display="flex"
                        alignitems="flex-start"
                        alignContent="flex-start"
                        flex="1 0 0"
                        alignself="stretch"
                        flexWrap="wrap"
                        gap="16px"
                    >
                        <img src={imagePoster} alt="poster" />
                        <Box>
                            <Box display="inline-flex" ml="24px">
                                <Typography variant="h3">
                                    {filmDetails.title} (
                                    {getFormateDate(filmDetails.release_date)})
                                </Typography>

                                <IconButton onClick={favoriteHandler}>
                                    <StarIcon
                                        fontSize="large"
                                        style={{
                                            color: favoriteIconColor,
                                        }}
                                    ></StarIcon>
                                </IconButton>
                            </Box>
                            <Box ml="12px" my="20px">
                                <IconButton component={Link} to="/">
                                    <ArrowBackIcon fontSize="large" />
                                </IconButton>
                            </Box>
                            <Box marginLeft="24px">
                                {filmCredits ? (
                                    filmCredits.cast.slice(0, 5).map((item) => (
                                        <Typography
                                            variant="h6"
                                            key={item.name}
                                        >
                                            {item.name}
                                        </Typography>
                                    ))
                                ) : (
                                    <p>
                                        Упс.. Произошла ошибка загрузки описания
                                        к фильму..
                                    </p>
                                )}
                            </Box>
                            <Box margin="80px" marginLeft="24px">
                                <Typography variant="h4">Детали</Typography>
                            </Box>

                            <Box
                                display="inline-flex"
                                marginLeft="12px"
                                marginTop="24px"
                            >
                                <TableContainer>
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Страна</TableCell>
                                                <TableCell>
                                                    {
                                                        filmDetails
                                                            .production_countries[0]
                                                            .name
                                                    }
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Год</TableCell>
                                                <TableCell>
                                                    {getFormateDate(
                                                        filmDetails.release_date
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Жанр</TableCell>
                                                <TableCell>
                                                    {filmDetails.genres[0].name}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Режиссёр</TableCell>
                                                <TableCell>
                                                    {
                                                        filmDetails
                                                            .production_countries[0]
                                                            .name
                                                    }
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Сценарий</TableCell>
                                                <TableCell>
                                                    {
                                                        filmDetails
                                                            .production_countries[0]
                                                            .name
                                                    }
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Бюджет</TableCell>
                                                <TableCell>
                                                    {filmDetails.budget} $
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Зрители</TableCell>
                                                <TableCell>
                                                    {filmDetails.popularity}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Время</TableCell>
                                                <TableCell>
                                                    {filmDetails.runtime} минут
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </div>
            ) : (
                <p>Идёт загрузка, пожалуйста, подождите... </p>
            )}
        </div>
    );
}
