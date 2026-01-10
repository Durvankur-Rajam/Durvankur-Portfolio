import RotatingText from "../components/rotatingtext";
import { ArrowUpRight } from "lucide-react";
import AnimatedContent from "../components/animatedcontent";

const ContactPage = () => {
  // Contact links data
  const contactLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/durvankur-rajam/",
      description: "Connect with me professionally",
    },
    {
      name: "GitHub",
      link: "https://github.com/Durvankur-Rajam",
      description: "Check out my code repositories",
    },
    {
      name: "Email",
      link: "mailto:durvankurrajam099@gmail.com?subject=Hello%20my%20friend",
      description: "Let's talk business",
    },
    {
      name: "CV",
      link: "durvankur_cv.pdf",
      description: "Download my resume",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-28 lg:pt-34">
        <h1 className="font-bold text-[30px]">MY CONTACT</h1>

        <h2 className="font-semibold text-lg font-mono text-[#FF611D] flex items-center mb-12">
          SHOOT ME{" "}
          <span className="ml-2">
            <RotatingText
              texts={[
                "A LINKEDIN CONNECTION",
                "AN EMAIL",
                "AN OPPORTUNITY",
                "A COLLAB INVITE",
              ]}
              mainClassName="px-2 md:px-2.5 bg-[#D6D2BD] text-[#FF611D] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </span>
        </h2>

        {/* Contact Links Menu */}
        <div className="w-full max-w-2xl px-4">
          {contactLinks.map((contact, index) => (
            <AnimatedContent
              key={index}
              distance={200}
              direction="horizontal"
              reverse
              config={{ tension: 70, friction: 13 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-gray-200 py-6 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-[#FF611D] transition-colors duration-300">
                      {contact.name}
                    </h3>
                    <p className="text-[#D6D2BD]/70 font-mono mt-1 group-hover:text-[#FF611D] transition-colors duration-300">
                      {contact.description}
                    </p>
                  </div>
                  <div className="text-[#FF611D] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300">
                    <ArrowUpRight size={40} />
                  </div>
                </div>
              </a>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
