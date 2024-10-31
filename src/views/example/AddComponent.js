import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  //
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.titleJob || !this.state.salary) {
      alert("Missing required params!");
      return;
    }
    console.log(">>>check input", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.titleJob,
      salary: this.state.salary,
    });
    this.setState({
      titleJob: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <div>Hello! I'm an AddComponent file</div>
        <form>
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.titleJob}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
          <br />
          <br />
        </form>
      </>
    );
  }
}

export default AddComponent;
