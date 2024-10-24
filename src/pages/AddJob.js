import React from 'react';
import AddJobForm from '../components/AddJobForm';

function AddJob() {
  const handleAddJob = (jobData) => {
    // Handle the submitted job data here (e.g., post to an API, update state, etc.)
    console.log('New job added:', jobData);
  };

  return (
    <div className="App">
      <h1>Freelance Marketplace</h1>
      <AddJobForm onSubmit={handleAddJob} />
    </div>
  );
}

export default AddJob;
