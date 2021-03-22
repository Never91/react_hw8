import React from 'react';
import Statistics from './Statistics/Statistics';
import statisticalData from './statistical-data.json';
import './App.css';



export default function App(){
    return(
        <body className = {'body'}>
           <Statistics title="Upload stats" stats={statisticalData}/>
    </body>
    )
}