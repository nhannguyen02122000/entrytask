import Image from 'next/image'
import React from "react";

const SpeakerCard = ({style, ele }) => (
  <div style={{...style}} className="p-1">
    <div className="relative w-5/6 h-5/6">
      <Image
        src={ele.picture.large}
        layout="fill"
        alt=""
      />
    </div>
    <h2>Name: {ele.name.first}</h2>
    <h3>Phone: {ele.phone}</h3>
  </div>
);

export default SpeakerCard;