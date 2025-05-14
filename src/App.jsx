import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Weather from './components/weather';
import Shoppingcart from './components/shoppingcart';
import Digitalclock from './components/digitalclock';
import QrCode from './components/QrCode';
import UseReducer from './components/UseReducer';
import Lazyloading from './components/Lazyloading';
// import { Suspense } from 'react';
// const LazyComponent = React.lazy(() => import('./components/Lazyloading'));
import Ref from './components/Useref';
import Crud from './components/Crud';
import Redux from './components/Redux';


function App() {
  return (
    <Fragment>
        {/* <Digitalclock/> */}
        {/* <Weather/> */}
        {/* <Ref/> */}
        {/* <Crud/>   */}
        {/* <QrCode/> */}
        {/* <Events/> */}
        <Shoppingcart/>
        {/* <Crud/> */}
        {/* <UseReducer/> */}
        {/* <Suspense fallback={<div>Loading.....</div>}>
          <LazyComponent/>
        </Suspense> */}
    </Fragment>
  
  );
}

export default App;
