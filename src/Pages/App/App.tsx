// import { Layout } from '../../Components/Layout';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes/Global';
import './App.css';
import { Navbar } from '../Navbar';
import { Modal } from '../../Components/Modal';
import { GlobalProvider } from '../../Context/global-context';


function App() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <>
      <GlobalProvider>
        <HashRouter>
          <Navbar />
          <AppRoutes />
        </HashRouter>

        {openModal && (
          <Modal>
            <h1>Modal hecho con React Portal</h1>
          </Modal>
        )}
      </GlobalProvider>
    </>
  )
}

export default App
