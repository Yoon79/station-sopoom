import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";
import Footer from "../components/footer";

const Products: NextPage = () => {
  return (
    <div className="bg-amber-50">
      <Nevigator />
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="lg:ml-56  xl:ml-64">
          <Image
            src="/yellowdancer.png"
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="flex-col pt-5 py-6">
          <div className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
            cat in the box
          </div>
          <div className="ml-1 mt-0.5 text-gray-700 font-medium">
            캣인더박스
          </div>
          <div className="flex-col pt-5 py-6">
            <div>여기</div>
            <div>여기</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
