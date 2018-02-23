import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QuestionView from './QuestionView/QuestionView';

class App extends Component {

  componentWillMount() {
    this.setState({
      currentView: 'questionView'
    });

    this.views = {
      questionView: <QuestionView changeView={this.changeView}/>,
      thankYouView: <div></div>,
      analyticsView: <div></div>
    }
  }

  changeView = (view) => {
    this.setState({currentView:view});
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <nav className="nav-extended">
             <div className="nav-wrapper">
               <a href="#" className="brand-logo">Logo</a>
             </div>
             <div className="nav-content">
               <ul className="tabs tabs-transparent">
                 <li className="tab active">DIN DAG</li>
                 <li className="tab">ANALYS</li>
               </ul>
             </div>
            </nav>

            {this.views[this.state.currentView]}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
