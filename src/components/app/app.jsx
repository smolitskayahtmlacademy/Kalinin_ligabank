import React from 'react';
import { ToastContainer} from 'react-toastify';
import ConverterScreen from '../converter-screen/converter-screen';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from '../not-found/not-found';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact  from='/' to='/converter'/>
        <Route exact path='/converter'>
          <ConverterScreen/>
          <ToastContainer/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
