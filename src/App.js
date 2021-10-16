import loginForm from './components/loginForm';
import React, { Fragment } from 'react';
import index from './index'

function App() {
  return (
    <React.Fragment>
    <div className="create">
      <form>
        <div>
          <h2>Login UATF</h2>
          <div >
            <label>User Name: </label>
            <input type="text"></input>
          </div>
          <div >
            <label>Password: </label>
            <input type="password"></input>
          </div>
        </div>
          <button type="submit"> <a href="./components/admin">Ingresar</a> </button>
      </form>
    </div>
    </React.Fragment>
          
  );
}

export default App;
