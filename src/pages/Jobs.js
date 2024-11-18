import {React, useState, useEffect} from 'react';
import './Jobs.css';
import { useSelector } from "react-redux";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const formData = useSelector((state) => state.form);
  // Sample job data
  // const jobs1 = [
  //   {
  //     id: 1,
  //     title: 'Frontend Developer',
  //     company: 'Tech Corp',
  //     description: 'Looking for an experienced frontend developer skilled in React.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     title: 'Backend Developer',
  //     company: 'Dev Solutions',
  //     description: 'Seeking a backend developer with expertise in Node.js and MongoDB.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 3,
  //     title: 'UI/UX Designer',
  //     company: 'Creative Minds',
  //     description: 'Need a creative UI/UX designer to redesign our mobile app.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 4,
  //     title: 'Project Manager',
  //     company: 'Business Inc.',
  //     description: 'Experienced project manager required for overseeing multiple projects.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 5,
  //     title: 'Data Analyst',
  //     company: 'DataWorks',
  //     description: 'Looking for a data analyst proficient in Python and SQL.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 6,
  //     title: 'Content Writer',
  //     company: 'Media House',
  //     description: 'Need a content writer with experience in SEO and blogging.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 7,
  //     title: 'Mobile App Developer',
  //     company: 'Appify',
  //     description: 'Seeking a mobile app developer skilled in Flutter or React Native.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 8,
  //     title: 'DevOps Engineer',
  //     company: 'CloudNet',
  //     description: 'Looking for a DevOps engineer with AWS and Docker experience.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  // ];


 
  useEffect(() => {
      // Replace with your API endpoint
      if (formData?.title){
        setJobs(prevJobs => [...prevJobs, formData] )
      }
      // console.log('jobs', jobs)
      
      // axios.get('/api/jobs')
      //   .then(response => {
      //     setJobs(response.data);
      //   })
      //   .catch(error => {
      //     console.error('There was an error fetching the jobs!', error);
      //   });
    }, [formData]);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   axios.get('/api/jobs')
  //     .then(response => {
  //       setJobs(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the jobs!', error);
  //     });
  // }, []);

  return (
    // <div>
    //   <h2>Form Data</h2>
    //   <pre>{JSON.stringify(formData, null, 2)}</pre>
    // </div>

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
