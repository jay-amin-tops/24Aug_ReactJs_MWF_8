import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CustomStore from './CustomStore.jsx';
import MainRoute from './MainRoute.jsx';
import {BrowserRouter} from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  </Provider>
);
{/* <React.StrictMode>
</React.StrictMode> */}
