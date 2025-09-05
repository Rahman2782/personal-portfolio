'use client'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="items-start h-screen px-8">
      <main>
        {/* HOME */}
        <section id="HOME" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-8">
            {/* LEFT SIDE CONTENT */}
            <TypeAnimation
              sequence={[
                'Hi,',
                1000,
                "I'm Rahman"
              ]}
              wrapper="span"
              speed={10}
              style= {{ fontSize: '2em', display: 'inline-block', color: '#7bf1a8' }}
              />

              <p className="text-gray-300 text-lg max-w-md leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
          </div>

          {/* RIGHT SIDE CONTENT - IMAGE */}
          <div>
            
          </div>
        </section>
        <AboutSection />
        <SkillsSection />
      </main>



    </div>
  );
}
