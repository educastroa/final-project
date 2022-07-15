import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import noImage from './img/no-image.png';


export default function Messages({ job, id }) {
  const [src, setSrc] = useState();

  const handleError = () => {
    setSrc(noImage);
  };

  useEffect(() => {
    // setSrc(job.employer_logo ?? noImage);
  }, []);

  return (
    <div className="mx-auto mt-4" style={{ maxWidth: '800px' }}>
      <div className="my-3">
        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center overflow-hidden">
              <div className="me-4">
                <img
                  src={src}
                  // onError={handleError}
                  height="auto"
                  width="64" />
              </div>

              <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
                <div className="w-100">
                  <b>Employer: </b>
                  {/* {job.employer_name} */}
                </div>
                <div className="w-100">
                  <b>Job Title: </b>
                  {/* {job.job_title} */}
                </div>
                <div className="w-100">
                  <b>Date posted: </b>
                  {/* {job.job_posted_at_datetime_utc != null
                  ? format(new Date(job.job_posted_at_datetime_utc), 'MM/dd/yyyy - hh:mm aaa')
                  : 'N/A'
                } */}
                </div>
                <div className="w-100">
                  {/* <a href={job.job_apply_link} target="_blank"><b>Apply Here</b></a> */}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-light text-nowrap"
              data-bs-toggle="collapse"
            // data-bs-target={`#jobs-${id}`}
            // aria-expanded="false"
            // aria-controls={`jobs-${id}`}
            >
              See More...
            </button>
          </div>
        </div>
        <div className="collapse">
          {/* <div className="collapse" id={`jobs-${id}`}> */}
          <div className="card card-body">
            <b>Job description:</b>

            {/* {job.job_description} */}
          </div>
        </div>
      </div>
    </div>
  );
}
