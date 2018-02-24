import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QuestionView from './QuestionView/QuestionView';
import ThankYouView from './ThankYouView/ThankYouView';
import StreakView from './StreakView/StreakView';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

  componentWillMount() {
    this.setState({
      currentView: 'questionView',
      streakView: false,
    });

    this.views = {
      questionView: <QuestionView onComplete={() => {
        //this.changeView('thankYouView');
        this.setState({'streakView': true});

        setTimeout(() => this.changeView('thankYouView'), 300);
        setTimeout(() => this.setState({'streakView': false}), 1300);
      }} />,
      thankYouView: <ThankYouView></ThankYouView>,
      analyticsView: <div></div>
    }
  }

  changeView = (view) => {
    this.setState({currentView:view});
  }
  render() {
    const theme1 = getMuiTheme({
      slider: {
        selectionColor: "#0EDBA7",
        handleSize: 26,
        handleSizeDisabled: 8,
        handleSizeActive: 26,
      }
    })
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme1}>
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

            <StreakView enabled={this.state.streakView} />
            <div className={"view"+(this.state.streakView? " disabled" : "")}>
              {this.views[this.state.currentView]}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
