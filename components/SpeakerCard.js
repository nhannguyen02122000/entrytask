import Image from 'next/image'
import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

const SpeakerCard = ({ele, style, GUTTER_SIZE}) => {
  return (
    <div className="flex">
      <img src="https://randomuser.me/api/portraits/men/91.jpg" alt=""/>
    </div>
  )
}

export default SpeakerCard;