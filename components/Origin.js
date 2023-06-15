import React from "react";

const Origin = ({about, colour}) => {
  return (
    <div className="flex flex-row space-x-10 m-5">
      <div className="h-1/3">
      </div>
      <div className="w-full h-full space-y-5">
        <h1 className="text-4xl" style={{color: `${colour}`}}>Origin</h1>
        <p style={{color: `${colour}`}}>
          {about?.origin}
        </p>
      </div>
    </div>
  );
};

export default Origin;
