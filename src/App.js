import './App.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/video/:videoId" element={<Main></Main>}></Route>
                <Route path="/upload" element={<Upload></Upload>}></Route>
                {/* <Route path="*" element={NotFound}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;