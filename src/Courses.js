import React from "react";
const Courses = ({ title, desc, img }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
