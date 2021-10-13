import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/App.css';
import { ContactForm } from './pages/ContactForm';
import { ContactFormSubmission } from './pages/ContactFormSubmission';
import { HomePage } from './pages/HomePage';
import { PropMate } from './pages/PropMate';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactForm} />
          <Route path='/contactsubmission' component={ContactFormSubmission} />
          <Route path='/propmate' component={PropMate} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
