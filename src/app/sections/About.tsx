import { Timeline } from "../components/timeline";

export const About = () => {
  const data = [
    {
      title: "2024 - 2026",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Pursuing my MCA with a strong focus on continuous learning and
            real-world problem solving
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Currently focused on:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📚 Strengthening core concepts in software development and computer
              science
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🛠️ Building hands-on projects to bridge theory with practical
              implementation
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🧠 Maintaining a student mindset by constantly learning new tools,
              technologies, and best practices
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🎓 Expected to graduate in 2026
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Completed my BSc in Information Technology and built my technical
            foundation
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Key learning milestones:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              💻 Gained strong fundamentals in programming, databases, and web
              technologies
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🧩 Developed problem-solving skills through academics and
              self-practice
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🚀 Discovered my interest in software development and lifelong
              learning
            </div>
            <div className="flex items-center text-sm md:text-md font-mono pt-2">
              ... setting the stage for continuous growth
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Completed my 12th grade and took my first step toward a tech-focused
            career
          </p>
          <div className="mb-8 font-medium">
            <div className="flex items-center text-sm md:text-md font-mono">
              Looking back:
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              🌱 Developed an early interest in computers and technology
            </div>
            <div className="flex items-center text-sm md:text-md font-mono">
              📈 Learned the importance of consistency, discipline, and
              continuous learning
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          CODE.EAT.SLEEP.REPEAT
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
