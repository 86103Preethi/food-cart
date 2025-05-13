import React from 'react';
import './App.css';
// import Weather from './components/weather';
import Shoppingcart from './components/shoppingcart';
// import Digitalclock from './components/digitalclock';
// import UseReducer from './components/UseReducer';
// import Lazyloading from './components/Lazyloading';
// import Addcomponent from './components/Redux/Addcomponent';
// import { Suspense } from 'react';
// const LazyComponent = React.lazy(() => import('./components/Lazyloading'));
import Crud from './components/Crud';



function App() {
  return (
    // <div className="App">
    //    <Weather/> 
    // </div>
    <div>
        {/* <Digitalclock/> */}
        <Shoppingcart/>
        {/* <Crud/> */}
        {/* <Demo/> */}
        {/* <Login/> */}
        {/* <UseReducer/> */}
        {/* <Suspense fallback={<div>Loading.....</div>}>
          <LazyComponent/>
        </Suspense> */}
        {/* <Addcomponent/> */}

    </div>
  
  );
}

export default App;
