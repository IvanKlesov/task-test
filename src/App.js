import { Select } from './components/UI/Select/Select';
import React from 'react';
import { Htag } from './components/UI/HTag/Htag';
import styles from './index.module.css';



function App() {


  return (
    <div className={styles.app}>
        <Htag tag='h1'>
                    Работа с адресами
        </Htag>
        <Htag tag='h3'>
            Адрес
        </Htag>
        <Select />

    
        
    </div>
  );
}

export default App;

