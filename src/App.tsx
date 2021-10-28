import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Navbar />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactForm} />
          <Route path='/contact_submission' component={ContactFormSubmission} />
          <Route path='/propmate' component={PropMate} />
          <Route path='/blog' component={Blog} />
          <Route path='/developer_profile' component={DeveloperProfile} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
