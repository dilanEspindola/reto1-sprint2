import { JobsLists } from "./JobsLists";
import listaEmpleos from "../jobs.json";

import "../styles/jobs.css";
import "../styles/app.css";

export const JobsSection = () => {
  return (
    <section className="jobs">
      <div className="list-jobs">
        <JobsLists jobslist={listaEmpleos} />
      </div>
    </section>
  );
};
