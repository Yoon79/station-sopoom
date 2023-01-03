import Image from "next/image";

export default function Main() {
  return (
    <div className="bg-amber-50">
      <div>
        <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
          <div className="">
            {/* <h4 className="font-['AlegreyaSans'] font-bold tracking-tight text-gray-900 text-xl"> */}

            <div className="mt-3 px-4">
              <Image
                src="/opening.png"
                alt="Picture of the author"
                width={800}
                height={800}
              />
            </div>
            {/* <div className="px-4">
              <span className="text-justify text-sm italic text-gray-500">
                비비추(정갈한 수줍음), 39.5 X 52.5cm Watercolor
              </span> */}
              {/* <span className="text-justify ml-4 text-sm italic text-gray-400">
                
              </span>
              <span className="text-justify ml-4 text-sm italic text-gray-400">
                
              </span> */}
            {/* </div> */}
          </div>

          <div className="mt-10 px-4">
            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
              축 오픈
            </h4>
            <div className="mt-0.5 text-gray-700 font-medium">
              문구문구
            </div>

            <p className="text-justify mt-4 text-gray-700">
              일상 속에 작은 귀여움으로 작은 에너지를 얻자
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
