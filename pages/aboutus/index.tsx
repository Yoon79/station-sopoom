import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="lg:ml-56 mt-14 xl:ml-64">
          <Image
            src="/yellowdancer.png"
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="flex-col pt-5 py-6">
          <div className="font-mono font-bold text-gray-800 text-xl">
            CAT IN THE BOX
          </div>
          <div className="font-mono mt-1.5 text-gray-700 font-medium">
          since 2023
          </div>
          <div className="flex-col pt-5 py-6">
            <div className="font-mono">hello.</div>
            <div className="font-mono">welcome to our cool website.</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
