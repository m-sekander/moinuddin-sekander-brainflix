import './App.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Modal from './components/Modal/Modal';
import sadFace from './assets/images/850656-200-sad-face.png';

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/videos/:videoId" element={<Main></Main>}></Route>
                <Route path="/upload" element={<Upload></Upload>}></Route>
                <Route path="*" element={<Modal message="This page doesn't exist." image={sadFace}></Modal>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;