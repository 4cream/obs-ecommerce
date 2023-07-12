// import { Layout } from '../../Components/Layout';
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes/Post';
import './App.css';
import { Navbar } from '../Navbar';

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <AppRoutes />
      </HashRouter>
    </>
  )
}

export default App
