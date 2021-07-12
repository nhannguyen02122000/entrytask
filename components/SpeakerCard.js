import Image from 'next/image'
import React from "react";

const SpeakerCard = ({style, ele }) => (
  <div style={{...style}} className="border-2 border-gray-700 p-1">
    <div className="relative w-full h-60">
      <Image
        src={ele.picture.large}
        layout="fill"
      />
    </div>
    <h2>Name: {ele.name.first}</h2>
    <h3>Phone: {ele.phone}</h3>
  </div>
);

export default SpeakerCard;