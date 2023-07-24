import React from "react";

function ExperienceBox({ job }) {
  return (
    <div className='flex w-2/3 justify-around p-7 rounded-lg hover:bg-gray-800 cursor-pointer'>
      <div className='mr-4 text-gray-400 flex items-center justify-between'>
        {job.startDate} <p className='w-3 border-b-[1px] h-1 m-2'></p>{" "}
        {job.endDate}
      </div>
      <div className='w-2/3'>
        <p className='text-xl text-gray-200'>{job.jobTitle}</p>
        <p className='text-gray-300'>{job.company}</p>
        <p className='text-gray-400'>{job.jobDescription}</p>
        {job.techStack.map((item, index) => (
          <li className='text-gray-400' key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ExperienceBox;
