'use client'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TypeAnimation
        sequence={[
          'Hi,',
          1000,
          "I'm Rahman"
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: '2em', display: 'inline-block', color: '#01FE2B', backgroundColor: 'black'}}
        />
    </div>
  );
}
