import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import "./Profiles.css";
import Nav from "../Nav";

function Profiles() {
  return (
    <div className="profiles">
      <Nav />
      <div className="profiles__body">
        <h1>Manage Profiles:</h1>
        <div className="profiles__container">
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABc0jTkOerx0tI4TfdbzDeSo-0rWVzoQ99XHdXB12g960QbEZb49eOHTiM656ruYYMc6MOqST_DNvPLv1uxIENbw2dMpE.png?r=535)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon className="edit" style={{ color: "white" }} />
            <h3>Avneesh</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABYlSMWtPaFD1O-rnzo6a96sg5v8nOxLuqi7ULy4Fgk1P7vH8kocPWCGD0WV2YIjfLNnxCkRNd3IvkkrAErKdGKaGmEEn.png?r=a29)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />

            <h3>Sonny</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaNSVf_1pbqwbDSgSn2MW5kZYbGQV_hHpNYXpZ1s8Qm0jRpYbb0-MIa1oEW4JoTPaTVmLpo-UU0sHULDzvcHS13AkcjG.png?r=88c)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Jay</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQSezyRh9HBbj3UkKUZudkjvwyHbNYw4IXKHetsW-lDRuqmPsrYGjj9kTIJRtNh7koRtDIIT8xsZAl91WBmCo-2b5lbL.png?r=cea)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Ben</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABfEfS070ckqk2cNOyk1qE04ONtZvmcai3L8LliVbA2XS1hx9bUCBXq2dhSIWFcFyWPpN6jnET1h11KUdBmYsLd4qzt73.png?r=8fb)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>David</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
