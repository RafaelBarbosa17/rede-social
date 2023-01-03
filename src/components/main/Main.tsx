
import { Home } from './routes/home/Home';
import { Search } from './routes/search/Search';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import { Saves } from './routes/saves/Saves';
import { Shorts } from './routes/shorts/Shorts';
import { Profile } from './routes/profile/Profile';

export const Main = () => {
    return (
        <main className="Main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/saves' element={<Saves />} />
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
        </main>
    )
}