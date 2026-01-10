import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <div className="pt-10 md:pt-15">
      <ScrollVelocity
        texts={[
          "<Javascript> <ReactJs> <NodeJS> <Java> <SQL> [AI/ML] [Web Development] [UI/UX] ",
          
        ]}
        velocity={80}
        parallaxClassName="parallax"
        scrollerClassName="scroller"
      />
    </div>
  );
}