import './App.scss';
import Button from './components/Button/Button';
import Upload from './assets/images/upload.svg'

function App() {
  return (
    <div className="app">
      <h1>Hello World!!!</h1>
      <Button className="button" text="Upload" icon={Upload}></Button>
    </div>
  );
}

export default App;