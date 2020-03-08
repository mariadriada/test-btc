import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import store from './redux/store'
import { Provider } from 'react-redux'
import Coins from './components/Coins'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Alert variant="success">
          Hello... Boostrap ok!
        </Alert>
        <Coins />
      </div>
    </Provider>
    
  );
}

export default App;
