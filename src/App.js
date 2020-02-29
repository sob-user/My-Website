import React from 'react';
import './App.css';
import Acceuil from './Acceuil'
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Achievements from './Achievements'
import Contact from './Contact'
import Me from './Me'
import MyStack from './MyStack';
import Certifications from './Certifications';
import SoftSkills from './SoftSkills'

function App() {
  return (
    <BrowserRouter>
        <Switch>
             <Route  exact path='/' component={Acceuil} />
             <Route  path='/Home' component={Home} />
             <Route  path='/AboutMe' component={AboutMe} />
             <Route  path='/Achievements' component={Achievements} />
             <Route  path='/Contact' component={Contact} />
             <Route  path='/Me' component={Me} />
             <Route  path='/MyStack' component={MyStack} />
             <Route  path='/Certifications' component={Certifications} />
             <Route  path='/SoftSkills' component={SoftSkills} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
