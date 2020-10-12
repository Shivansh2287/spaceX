import React from "react";
import className from "classnames";
import Moment from "moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_success },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:
            <span
              className={className({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>Success:{launch_success}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary ">
            Launch details
          </Link>
        </div>
      </div>
    </div>
  );
}
