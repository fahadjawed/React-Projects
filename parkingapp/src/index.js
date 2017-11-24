import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} ><App/></MuiThemeProvider> , document.getElementById('root'));
registerServiceWorker();
