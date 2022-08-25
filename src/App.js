import './App.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';

function App() {
  return (
    <div className="app">
      <Header></Header>
      {/* <Main></Main> */}
      <Upload></Upload>
    </div>
  );
}

export default App;