import React from "react";

function EducationBox({ education }) {
  return (
    <div className='flex w-2/3 justify-around p-7 rounded-lg hover:bg-gray-800 cursor-pointer'>
      <div className='w-2/3'>
        <p className='text-gray-300 text-2xl'>{education.category}</p>

        <p className='text-gray-200'>{education.name}</p>
        <p className='text-gray-200'>{education.branch}</p>
        <p className='text-gray-200'>{education.completionDate}</p>
        {/* <p className='text-gray-400'>{education.description}</p> */}
        {/* {education.techStack.map((item, index) => (
          <li className='text-gray-400' key={index}>
            {item}
          </li>
        ))} */}
      </div>
    </div>
  );
}

export default EducationBox;
