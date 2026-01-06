import React from "react";
import Image from "next/image";
import AnimatedContent from "../components/animatedcontent";

const AboutPage = () => {
  return (
    <div>
      <div className="relative font-mono">
        <div className="container mx-auto px-10 md:px-15 lg:px-12 pt-28 lg:pt-40">
          <AnimatedContent
            distance={10}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            {/* Main Content */}
            <h1 className="text-5xl font-bold mb-12">Hi, I'm Durvankur!</h1>
          </AnimatedContent>

          {/* Image section - shows at top on sm and md screens */}
          <AnimatedContent
            distance={10}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="block lg:hidden mb-8">
              <div className="flex justify-center">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="overflow-hidden rounded-full w-full h-full">
                    <Image
                      src="/myprofile.jpg"
                      alt="Durva's alt profile pic"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-16">
            {/* Text section */}
            <AnimatedContent
              distance={10}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="lg:max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium mb-4">
                    A{" "}
                    <span className="text-[#FF611D]">forever student</span>{" "}
                    with a{" "}
                    <span className="text-[#FF611D]">curious mindset</span>, on a
                    journey to grow as a{" "}
                    <span className="text-[#FF611D]">
                      software engineer
                    </span>.
                  </h2>

                  <p className="mb-8">
                    I believe in carrying a{" "}
                    <span className="text-[#FF611D]">student mentality</span>{" "}
                    throughout my career — constantly learning, questioning, and
                    refining my understanding. Curiosity drives how I approach
                    problems, motivating me to explore solutions deeply and
                    build{" "}
                    <span className="text-[#FF611D]">impactful</span> and{" "}
                    <span className="text-[#FF611D]">well-thought-out</span>{" "}
                    software.
                  </p>
                </div>

                <p className="mb-4">
                  During my{" "}
                  <span className="text-[#FF611D]">
                    MCA Studies
                  </span>
                  , I have gained hands-on experience across multiple
                    technical domains. I enjoy working on projects that challenge my thinking,
                    push me beyond my comfort zone, and encourage continuous {" "}{" "}
                  <span className="text-[#FF611D]">learning</span> and{" "}
                  <span className="text-[#FF611D]">growth</span>.
                </p>

                <p>
                  I actively seek new challenges and view every experience as an
                  opportunity to learn something new. With a{" "}
                  <span className="text-[#FF611D]">curious mindset</span> and a
                  commitment to lifelong learning, I aim to create digital
                  experiences that are thoughtful, meaningful, and continuously
                  evolving.
                </p>

                <div className="mb-8"></div>
              </div>
            </AnimatedContent>

            {/* Image section - only visible on lg screens */}
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={false}
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="hidden lg:block">
                <div className="flex justify-end">
                  <div className="relative w-60 h-60 md:w-80 md:h-80">
                    <div className="overflow-hidden rounded-full w-full h-full">
                      <Image
                        src="/myprofile.jpg"
                        alt="Durva's profile pic"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
