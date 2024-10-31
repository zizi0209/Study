import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "Job 1", salary: 500 },
      { id: 2, title: "Job 2", salary: 300 },
      { id: 3, title: "Job 3", salary: 1200 },
    ],
  };
  addNewJob = (job) => {
    console.log(">>add new job", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          jobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
