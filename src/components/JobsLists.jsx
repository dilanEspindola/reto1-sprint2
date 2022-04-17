import { useState } from "react";

export const JobsLists = ({ jobslist }) => {
  const { jobs } = jobslist;
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

  const singles = [];
  const singlesState = [];

  for (let i = 0; i < jobs.length; i++) {
    const techs = jobs[i].technologies;
    for (let j = 0; j < techs.length; j++) {
      const element = techs[j];
      if (!singles.includes(techs[j])) {
        singles.push(element);
      }
    }
  }
  for (let i = 0; i < state.length; i++) {
    if (!singlesState.includes(state[i])) {
      singlesState.push(state[i]);
    }
  }

  const singleArr = [...singles, ...singlesState];
  let deleted = [];
  let filter = [];

  for (let i = singleArr.length - 1; i >= 0; i--) {
    if (singleArr.indexOf(singleArr[i]) !== i) {
      deleted.push(singleArr.splice(i, 1));
    }
  }
  if (deleted.length > 0) {
    deleted.flat().filter((e) => {
      jobs.map((job) => {
        job.technologies.map((t) => {
          if (e === t) {
            filter.push(job);
          }
        });
      });
    });
  }

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
                    key={index}
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
          {filter.map((job) => (
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
                    key={index}
                    onClick={() => handleClick(tech)}
                  >
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
