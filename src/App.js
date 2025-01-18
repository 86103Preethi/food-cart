/* eslint-disable no-unused-vars */
import './App.css';
import { Fragment } from 'react';
import QrCode from './components/QrCode';
import Events from './components/Events';
import ShoppingCart from './components/Shoppingcart';
import Ref from './components/usingRef';
import Weather from './components/weather';
import DigitalClock from './components/digitalclock';
import Crud from './components/Crud';
import Redux from './components/Redux';

const App = () => {
  return (
    <Fragment>
        {/* <QrCode/> */}
        {/* <Events/> */}
        <ShoppingCart/>
        {/* <DigitalClock/> */}
        {/* <Weather/> */}
        {/* <Ref/> */}
        {/* <Crud/>   */}
        {/* <Redux /> */}
    </Fragment>
  );
}

export default App;
