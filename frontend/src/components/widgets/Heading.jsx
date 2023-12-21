import React from 'react'

function Heading({heading}) {
  return (
    <div
      className="text-5xl font-bold text-center mt-20 mb-10"
      style={{ color: "rgba(24,25,81,255)" }}
    >
      {heading}
    </div>
  );
}

export default Heading
