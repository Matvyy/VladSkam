import React from 'react';
import styles from './App.module.css'
import Header from './header/header';
import Windows from './workwindow/windows';
import Contact from './contact/contact';
import Office from './works/office/office';
import Welder from './works/welder/welder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.header}><Header/></div> 
      <div className={styles.windows}>

      <Routes>
        <Route path='/' element={<Windows/>}/>
        <Route path='/office' element={<Office/>}/>
        <Route path='/welder' element={<Welder/>}/>
      </Routes>
        
      </div>

    </div>
    <br/>
    <hr className={styles.hr}/>
    <div className={styles.app}>
    <Contact/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
