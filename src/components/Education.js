import React from "react";
import EducationBox from "./EducationBox";

function Education() {
  let education = [
    {
      name: "SDMCET",
      category: "B.E",
      branch: "Electronics and communication",
      completionDate: "2018",
      endDate: "Present",
    },
    {
      name: "Sri chaitanya",
      category: "Higher Secondary",
      completionDate: "2012",
      description:
        "Worked on AWS S3 bucket, AWS SES, AWS pinpoint targeted communication channels for mailservice, push notification, whatsapp integration using meta whatsapp API and AWS lambda functions, Socket.Io",
      techStack: ["React js", "nodejs", "expressjs", "socketio"],
      startDate: "Jan 2021",
      endDate: "April 2023",
    },
  ];
  return (
    <div className='text-white flex flex-col items-end justify-center h-[90vh] w-[100vw]'>
      {education.map((item, index) => (
        <EducationBox education={item} key={index} />
      ))}
    </div>
  );
}

export default Education;
