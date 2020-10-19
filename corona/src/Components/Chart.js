/*import React from 'react';
//import api from './Api';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'

import './chart.css';

export default function ChartTest() {
    const [ dataChart, setDataChart ] = useState ( {} );
    useEffect(() => {
      const fetchData = async () => {
        let confirmedCases = [];
        let dateOfCases = [];
        await axios.get('https://disease.sh/v3/covid-19/historical/Algeria?lastdays=30')
          .then ( response => {
            for ( let dataObj of response.data ) {
              confirmedCases.push(parseInt(dataObj.timeline.cases));
              let tempDate = new Date (dataObj.timeline.cases.date);
              dateOfCases.push(tempDate.getUTCDate());
            }
        }); 
        setDataChart({ 
          labels: dateOfCases, 
          datasets: [{ 
            label: 'Confirmed cases', 
            data: confirmedCases 
          }]
        });
    }
      fetchData();
      console.log(dataChart)
    }, [dataChart]);
    return( 
      <div className='container'>
        <Line data={ dataChart }/> 
      </div>
    )
  }