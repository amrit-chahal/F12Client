import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Bottombar } from './components/Bottombar';
import { Navbar } from './components/Navbar';

import './css/App.css';
import {
  HomePage,
  ContactForm,
  ContactFormSubmission,
  PropMate,
  Blog,
  DeveloperProfile
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='f12-navigation'>
          <Navbar />
        </div>
        <div className='f12-body'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/contact' component={ContactForm} />
            <Route
              path='/contact_submission'
              component={ContactFormSubmission}
            />
            <Route path='/propmate' component={PropMate} />
            <Route path='/blog' component={Blog} />
            <Route path='/developer_profile' component={DeveloperProfile} />
            <Route component={HomePage} />
          </Switch>
        </div>
        <div className='f12-footer'>
          <Bottombar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
