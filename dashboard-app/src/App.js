import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Dashboard Application"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <Chip>
              Freddan Gillar Chips
            </Chip>
          </div>
        </MuiThemeProvider>

        <div className="container">
          <div className="row">
            <div className="col s4 box">1</div>
            <div className="col s4 box">2</div>
            <div className="col s4 box">3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
