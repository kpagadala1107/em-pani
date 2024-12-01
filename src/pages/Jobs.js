import {React, useState, useEffect} from 'react';
import './Jobs.css';
import { getWork } from "../redux/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const response = getWork();
    console.log('get response:', response)
    debugger
    setJobs(response)
  }, []);


  return (
    <div className="jobs-page">
      <h1>Job Listings</h1>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.title} />
            <div className="job-card-body">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
              <a href="#" className="btn">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
