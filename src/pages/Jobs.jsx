import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className='jobs'>
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Jobs

export const jobsLoader = async () => {
  const res = await fetch('http://localhost:3000/jobs');
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return res.json();
}

 