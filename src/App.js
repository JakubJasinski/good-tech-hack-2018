import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QuestionView from './QuestionView/QuestionView';
import ThankYouView from './ThankYouView/ThankYouView';
import StreakView from './StreakView/StreakView';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import notifImage from './notif.svg';

let classNames = require('classnames');

class App extends Component {

  componentWillMount() {
    this.setState({
      currentView: 'questionView',
      streakView: false,
      streakViewRemoved: true,
      tab1Active:true,
      tab2Active:false,
      tab2Notif: false
    });

    this.views = {
      questionView: <QuestionView onComplete={() => {
        //this.changeView('thankYouView');
        this.setState({streakView: true});
        this.setState({streakViewRemoved: false})

        setTimeout(() => this.changeView('thankYouView'), 300);
        setTimeout(() => {
          this.setState({'streakView': false});
          setTimeout(() => this.setState({streakViewRemoved: true}), 300);
        }, 2300);
      }} />,
      thankYouView: <ThankYouView onComplete={() => {
        this.setState({tab2Notif: true});
      }}/>,
      analyticsView: <AnalyticsView />
    }
  }

  changeView = (view) => {
    this.setState({currentView:view});
  }

  onMenuClick = (id) => {
    if(id === 0) {
      this.setState({tab1Active:true, tab2Active:false, currentView:'questionView'});
    }
    if(id === 1) {
      this.setState({tab1Active:false, tab2Active:true, currentView:'analyticsView'});
    }
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
    let menuClass1 = classNames('tab', {'active': this.state.tab1Active});
    let menuClass2 = classNames('tab', {'active': this.state.tab2Active});
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme1}>
          <div>
            <nav className="nav-extended" style={{paddingTop:'24px'}}>
             <div className="nav-wrapper">
               <a className="brand-logo"></a>
             </div>
             <div className="nav-content">
               <ul className="tabs tabs-transparent">
                 <li className={menuClass1} onClick={() => this.onMenuClick(0)}>DIN DAG</li>
                 <li className={menuClass2} onClick={() => this.onMenuClick(1)}>ANALYS
                  {this.state.tab2Notif && <img className="notif" src={notifImage} />}
                 </li>
               </ul>
             </div>
            </nav>

            <StreakView enabled={this.state.streakView} removed={this.state.streakViewRemoved} />
            <div className={"view"
                  +(this.state.streakView? " disabled" : "")
                }>
              {this.views[this.state.currentView]}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
