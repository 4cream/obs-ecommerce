// import { Layout } from '../../Components/Layout';
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes/Post';
import './App.css';

function App() {

  return (
    <>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </>
  )
}

export default App
