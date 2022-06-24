import { Fragment } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import Question from './components/question/question';
import Seminar from './components/seminar/seminar';

function App() {

  return (
    <Fragment>

      <Landing/>
      <Seminar/>
      <Question/>
      <Footer/>

    
    </Fragment>

  );
}

export default App;
