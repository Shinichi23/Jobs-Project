import React, {useState} from 'react'
import Job from './Job'

const Jobs = (props) => {

    const[filtre, setFiltre] = useState('')
    const[jobs, setJobs] = useState(props.jobs);

    const filtrer = (e) => {
        setFiltre(e.target.value);
        const jobFiltred = e.target.value
       ? jobs.filter((elem) => {
            return elem.role
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase());
        })
        : props.jobs
        setJobs(jobFiltred);
    };

    return (
        <main>
            <form>
                <input onChange={(e) => filtrer(e)} value= {filtre}/>
            </form>
            {jobs.map(job => (
                <Job key={job.id} job={job} />
            ))} 
        </main>
    )
}

export default Jobs
