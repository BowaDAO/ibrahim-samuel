import Button from "../components/Button";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Slide triggerOnce>
      <footer className="bg-navy h-full w-full px-6 sm:px-10 md:px-28 lg:px-36 xl:px-44 pt-20 text-center flex flex-col gap-6">
        <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12 ">
          Get In Touch
        </h1>
        <p className="text-lightest-slate text-xs sm:text-base leading-7 sm:leading-8 font">
          Hey there! I am happy to connect with you to discuss collaborating
          with your exciting team and building amazing stuffs together.{" "}
          <span className="text-primary">
            I AM CURRENTLY OPEN TO OPPORTUNITIES
          </span>{" "}
          - especially ambitious projects.
        </p>

        <div>
          <Button
            text="Let's Discuss"
            url="mailto:samuelibrahim3029@gmail.com"
            y="4"
            x="6"
          />
        </div>

        <span>
          <p className="text-lightest-slate font-light text-xs sm:text-base leading-7 sm:leading-8 mt-16">
            Built By Samuel Ibrahim Oluwanbowa.
          </p>
          <p className="text-primary text-sm">version 1.0</p>
        </span>
      </footer>
    </Slide>
  );
};

export default Footer;
