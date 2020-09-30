import React from 'react'
import Job from './Job'

const Jobs = (props) => {
    return (
        <main>
            {props.jobs.map(job => (
                <Job key={job.id} job={job} />
            ))} 
        </main>
    )
}

export default Jobs
