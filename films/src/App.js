import './App.css';
import Header from './components/header/header.jsx';
import FilmCardInfo from './components/films/film_card_info.jsx';
import Content from './components/films/content.jsx';
import { Route, Routes } from 'react-router-dom';
import GetToken from './components/authorization/get_token.jsx';
import PostToken from './components/authorization/post_token.jsx';
import getCookie from './utils/cookie/getCookie.js';

function App() {
    const Token = getCookie('userToken');

    return (
        <div className="App">
            <Header />
            {Token ? (
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/Film/:id" element={<FilmCardInfo />} />
                </Routes>
            ) : null}
            <Routes>
                <Route path="/Registration" element={<GetToken />} />
                <Route path="/Authorisation" element={<PostToken />} />
            </Routes>
        </div>
    );
}

export default App;
