import React from 'react';
import ConverterScreen from '../converter-screen/converter-screen';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ConverterScreen/>
      <ToastContainer />
    </>
  );
}

export default App;
