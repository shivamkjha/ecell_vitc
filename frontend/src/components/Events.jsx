import React from 'react'
import Sample from './Sample';

function Events() {
  return (
    <div>
      <div
        className="text-5xl font-semibold text-center mt-10"
        style={{ color: "rgba(24,25,81,255)" }}
      >
        Upcoming Events
      </div>
      <div className="w-full p-10 flex items-center justify-evenly flex-wrap">
        <Sample />
        <Sample />
        <Sample />
      </div>
    </div>
  );
}

export default Events
