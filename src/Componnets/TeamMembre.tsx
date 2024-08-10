import React from "react";

export default function TeamMembre(props) {
  return (
    <div>
      <div className="bg-secandary-200">
        <a href="#">
          <img
            className="rounded-badge"
            src={props.info.img}
            alt={props.info.name}

          />
        </a>

        <div className="p-4">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <h1>{props.info.name}</h1>
       
           
          </a>
          <p>{props.info.position}</p>

        </div>
      </div>
    </div>
  );
}
