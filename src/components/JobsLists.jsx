export const JobsLists = ({ jobslist }) => {
  return (
    <>
      {jobslist.jobs.map((job) => {
        return (
          <div key={job.id} className="job">
            <div className="img-desc">
              <img src={job.image} />
              <div className="description">
                <h1>{job.company}</h1>
                <h3>{job.position}</h3>
                <div className="description-time">
                  <p>{job.timePublication}</p>
                  <span className="punto"></span>
                  <p>{job.time}</p>
                  <span className="punto"></span>
                  <p>{job.ubication}</p>
                </div>
              </div>
            </div>
            <div className="technologies">
              {job.technologies.map((tech, index) => (
                <div className="tech" key={index + 1}>
                  <p onClick={() => console.log(tech)}>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
