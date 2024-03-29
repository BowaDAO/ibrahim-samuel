import { BiError } from "react-icons/bi";
import Button from "../components/Button";

const Error = () => {
  return (
    <main className="bg-white h-full w-full px-6 py-14 sm:px-10 md:px-12 lg:px-44 flex justify-center">
      <div className="flex flex-col gap-10 text-center mt-10">
        <article className="flex flex-col gap-2 items-center">
          <span className="text-6xl text-red-700">
            <BiError />
          </span>
          <h1 className="text-6xl font-bold tracking-wider">404</h1>
          <h1 className=" text-red-600 text-2xl sm:text-4xl leading-12">
            Oops! The Page You Are Looking For Does Not Exist!
          </h1>
        </article>

        <article className="flex flex-col gap-2">
          <p className="text-base leading-7 md:leading-8 font-light">
            Please return to the homepage
          </p>

          <Button url="/" text="Home" x="6" y="4" />
        </article>
      </div>
    </main>
  );
};

export default Error;
