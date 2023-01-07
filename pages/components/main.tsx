import Image from "next/image";
import Typewriter from 'typewriter-effect';


export default function Main() {
  return (
    <div>
      <div>
        <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
          <div className="">
            {/* <h4 className="font-['AlegreyaSans'] font-bold tracking-tight text-gray-900 text-xl"> */}

            <div className="mt-10 px-4">
              <Image
                src="/opening.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className=" px-4">
            <h4 className="font-mono font-bold	 text-gray-800 text-xl">
            Congrats!
            </h4>
            <div className="font-mono mt-0.5 text-gray-700 font-medium">
              moongoomoongoo
            </div>

            <p className="font-mono text-justify mt-4 text-gray-700">
            Let us have fun in boring daily life with small and cute things.
            thanks to our muse bboobboo.
            </p>

            <br />
            {/* <p className="text-gray-500 text-right">- 김나미(NAMI)</p> */}
            {/* <div className=" text-right flex-col pt-5 py-6">
              <div>성산아트홀 제6전시실</div>
              <div>2022.06.01 수 - 06.06 월</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
