import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App (props) {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
