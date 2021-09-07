import React from "react";
import faker from "faker";
import EditDataButton from "./EditDataButton";

export default function Experience(props) {

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <>
      <div href="" className="my-3 experience-fragment-container">
        <div className="experience-fragment-company-image">
          <img
            className="experience-fragment-image"
            src={faker.image.business()}
            alt=""
          />
        </div>

        <div className="px-3 experience-fragment-details">
          <div className="experience-fragment-header">
            <h6 className="fw-400 experience-fragment-title">
              {props.experienceData.role}
            </h6>
            <div className="experience-fragment-edit-container">
              {  <EditDataButton e={props.experienceData} userId={props.userId} expId={props.expId}/> }
            </div>
          </div>

          <p className="experience-fragment-text">
            {props.experienceData.company}
          </p>
          <p className="experience-fragment-text text-secondary">
            {convertDateToString(
              formatDate(props.experienceData.startDate),
              formatDate(props.experienceData.endDate)
            )}
          </p>
          <p className="experience-fragment-text text-secondary">
            {props.experienceData.area}
          </p>
          <p className="experience-fragment-description my-2 text-decoration-none">
            {props.experienceData.description}
          </p>
        </div>
      </div>
    </>
  );
}

function convertDateToString(start, end) {
  console.log(start);
  console.log(end);
  if (end === null) {
    return start + " - Present";
  } else {
    return start + " - " + end;
  }
}

