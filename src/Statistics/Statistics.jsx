import React from 'react';
import './Statistics.css'


export default function Statistics({Statistics}) {
    return (
        
        <section className = {'section'}>
        <h2 className = {'Upload_stats_text'}>Upload stats</h2>

<ul className = {'item_conteiner'}> 
    <li className = {'item_1'}>
          <span className = {'label'}>.docx</span>
          <span className = {'percentage'}>4%</span>
     </li>
    <li className = {'item_2'}>
          <span  className = {'label'}>.mp3</span>
          <span className = {'percentage'}>14%</span>
    </li>
    <li className = {'item_3'} >
        <span className = {'label'}>.pdf</span>
        <span className = {'percentage'}>41%</span>
    </li>
    <li className = {'item_4'}>
         <span className = {'label'}>.mp4</span>
        <span className = {'percentage'}>12%</span>
    </li>
</ul>

</section>
)
}

