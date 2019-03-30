import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">ReactJS and Bootstrap Boilerplate</h1>
          <p className="lead">This pack comes with all the React dependencies installed along with the Boostrap library.</p>
          <hr className="my-2" />
          <p>More info on: </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg react w-25" href="https://reactjs.org" role="button">REACT</a>
            <a className='btn btn-secondary btn-lg w-25 ml-3 bootstrap' href="https://getbootstrap.com">BOOTSTRAP</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
