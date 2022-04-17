import { useState } from "react";

export const JobsLists = ({ jobslist }) => {
  const [state, setState] = useState([]);

  const handleClick = (tech) => {
    setState([...state, tech]);
  };
  const deleteElement = (index) => {
    state.splice(index, 1);
    setState([...state]);
  };
  const clearAll = () => {
    state.splice(0, state.length);
    setState([...state]);
  };

  return (
    <>
      {state.length === 0 ? (
        jobslist.jobs.map((job) => {
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
                  <div
                    className="tech"
                    key={index + 1}
                    onClick={() => handleClick(tech)}
                  >
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="filter">
            <div className="items">
              {state.map((tech, index) => (
                <p
                  className="showItems"
                  key={index}
                  onClick={() => deleteElement(index)}
                >
                  {tech}
                </p>
              ))}
            </div>
            <p className="clear" onClick={() => clearAll()}>
              clear
            </p>
          </div>
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
                    <div
                      className="tech"
                      key={index + 1}
                      onClick={() => handleClick(tech)}
                    >
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
