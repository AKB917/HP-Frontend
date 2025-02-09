import React from 'react'
import Image from "next/image";

function Student_1(props) {
  return (
    <div>
      <div>
        <p>Character :{props.studentName}</p>
        <p>House: {props.house}</p>
        {/* <Image src={props.image} alt="avatar" height={100} width={100} /> */}
      </div>
    </div>
  )
};

export default Student_1;