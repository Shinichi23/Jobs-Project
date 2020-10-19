import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


const Graph2 = () => {
  const [keys,setKeys]=useState()
  const [values,setValues]=useState()
    useEffect(() => {        const getData = async () =>{
            const response = await axios.get("https://disease.sh/v3/covid-19/historical/Japan?lastdays=30")
            setKeys(Object.keys(response.data.timeline.cases))
            setValues(Object.values(response.data.timeline.cases))
        }        
        getData()
    },[])
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

export default Graph2