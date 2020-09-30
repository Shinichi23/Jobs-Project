import React from 'react'

const Job = (props) => {
    return (
        <div>
            <img src={props.job.logo}/>
            <h6>{props.job.company}</h6>
            <h3>{props.job.position}</h3>
            <ul>
                <li>{props.job.postedAt}</li>
                <li>{props.job.contract}</li>
                <li>{props.job.location}</li>
            </ul>
            <ul>
                <li>Frontend</li>
                <li>Senior</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
        </div>
    );
}

export default Job



