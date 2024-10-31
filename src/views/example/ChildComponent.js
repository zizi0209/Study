import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = () => {
    this.setState({ showJob: !this.state.showJob });
  };
  handlOnClickDelete=(job)=>{
    alert('you deleted',job)
    this.props.deleteAJob(job)
  }
  render() {
    let { jobs } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={this.handleShowHide}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {jobs.map((item, index) => {
                return (
                  <div key={index}>
                    {item.id} - {item.title} - ${item.salary} 
                    <></> <span onClick={()=>{this.handlOnClickDelete(item)}}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={this.handleShowHide}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent=(props)=>{
//   let {jobs}=props;
//   return(
//     <div className="job-list">
//       {
//         jobs.map((item,index)=>{
//           return(
//             <div className={index}>
//               {item.id} - {item.title}
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

export default ChildComponent;
