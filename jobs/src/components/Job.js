import React from 'react'

const Job = (props) => {
    return (
        <div className={'job ' + (props.job.featured ? 'border' : '')} >
            <div className='job-left'>
            <img src={props.job.logo} alt='element'/>
            
            <div>
            <div className='tag'>
            <h6>{props.job.company}</h6>
            <div>
            {/* props.job.new ? <h5>NEW!</h5>:'' */}
            {props.job.new && <h5>NEW!</h5>}
            {props.job.featured ?<h5>FEATURED</h5> : '' }
            </div>
            </div>
            
            <h3>{props.job.position}</h3>
            <ul className='info'>
                <li>{props.job.postedAt}</li>
                <li>&#183;</li>
                <li>{props.job.contract}</li>
                <li>&#183;</li>
                <li>{props.job.location}</li>
            </ul>
            </div>
            </div>
            <ul className='tools'> 
                <li>{props.job.role}</li>
                <li>{props.job.level}</li>
                {props.job.languages.map((elem, i) => {
                    return <li key={i}>{elem}</li>;
                })}
                {props.job.tools.map((elem, i) => {
                    return <li key={i}>{elem}</li>;
                })}
            </ul>
            
        </div>
    );
}

export default Job



