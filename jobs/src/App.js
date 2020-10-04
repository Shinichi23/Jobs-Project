import React from 'react';
import Jobs from './components/Jobs'
import data from './data.json'

function App() {
  console.log(data)
  return (
    
    <div className="App">
      <div id='bg'></div>
      <div className='container'>
      <Jobs jobs={data}/>
      </div>
    </div>
  );
}

export default App;
