import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { useParams } from 'react-router-dom';


const Graph = () => {
  const [keys,setKeys]=useState()
  const [values,setValues]=useState()
  let {country} = useParams()
  console.log(country)

    useEffect(() => {        const getData = async () =>{
            const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)
            setKeys(Object.keys(response.data.timeline.cases))
            setValues(Object.values(response.data.timeline.cases))
        }        
        getData()
    },[country])
    return (
  <div>
  {(keys && values) && 
  <XYPlot
  xType="time"
  width={1000}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={keys.map((ele,index)=>{
      return {x:new Date(ele), y:values[index]}
    })}/>
  <XAxis />
  <YAxis />
</XYPlot>}
  </div>
    )
};

export default Graph