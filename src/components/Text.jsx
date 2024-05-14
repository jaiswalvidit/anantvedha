import React from "react";

export default function Text() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">What is Steam education?</h2>
        <div className="motion-safe:animate-fadeIn">
          <p className="text-base md:text-lg leading-relaxed mb-4">
            STEAM is an acronym which stands for science, technology, engineering,
            arts, and mathematics. In this education, we will teach a child to
            design and create their own imagination in the real world with all
            these 5 elements of STEAM in it. This educational model helps students
            to build the creative problem-solving and critical thinking skills that
            they will need in the 21st-century workforce. As quoted by Leonardo Da
            Vinci " To develop a complete mind; study the science of art; study the
            art of science. learn how to see. Realize that everything connects to
            everything else".
          </p>
        </div>
        <div className="motion-safe:animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Steam and not Stem?</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            STEM stands for science, technology,
            engineering, and mathematics while STEAM adds "arts", However, the
            difference between STEM and STEAM is far greater than tacking on
            another letter or even adding design skills to STEM. while STEM
            expressly focuses on scientific concepts, STEAM builds on these
            concepts through the creative process. Students engage both the
            right(creative) and left(logical) sides of the brain to innovate and
            solve the problem.
          </p>
        </div>
      </div>
    </div>
  );
}
