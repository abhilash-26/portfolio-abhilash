import React from "react";
import ExperienceBox from "./ExperienceBox";

function Experience() {
  let jobs = [
    {
      jobTitle: "Software Engineer",
      company: "Subcodevs",
      jobDescription:
        "Working on pms inhouse project of the company and zoundz music app for pets",
      techStack: ["React js", "nodejs", "socketio"],
      startDate: "May 2023",
      endDate: "Present",
    },
    {
      jobTitle: "Software Development Engineer",
      company: "CelebritySchool",
      jobDescription:
        "Worked on AWS S3 bucket, AWS SES, AWS pinpoint targeted communication channels for mailservice, push notification, whatsapp integration using meta whatsapp API and AWS lambda functions, Socket.Io",
      techStack: ["React js", "nodejs", "expressjs", "socketio"],
      startDate: "Jan 2021",
      endDate: "April 2023",
    },
  ];
  return (
    <div className='text-white flex flex-col items-end justify-center h-[90vh] w-[100vw]'>
      {jobs.map((item, index) => (
        <ExperienceBox job={item} key={index} />
      ))}
    </div>
  );
}

export default Experience;
