import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData();
    return (
        <div className='job-details'>
            <p><b>Job Title: </b>{jobDetails.title}</p>
            <p><b>Company: </b>{jobDetails.company}</p>
            <p><b>Location: </b>{jobDetails.location}</p>
            <p><b>Salary: </b>{'Rs '+jobDetails.salary}</p>
            <p><b>Description: </b>{jobDetails.description}</p>
            <p><b>Date Posted: </b>{jobDetails.datePosted}</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetails

export const jobsDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:5000/jobs/` + id);
    if (!res.ok) {
        throw Error('Could not find that job')
    }
    return res.json();
}