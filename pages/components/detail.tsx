import Image from "next/image";
import Link from "next/link";
const callouts = [
  {
    name: "human_catnip_club hoody",
    imageSrc: "/hoodyA.png",
    href: "/pictures/hoodyA.png",
  },
  {
    name: "tuesday_jazz_club hoody",
    imageSrc: "/hoodyB.png",
    href: "/pictures/hoodyB.png",
  },
  {
    name: "santa_cat iPhone case",
    description: "",
    imageSrc: "/phonecase.png",
    href: "/pictures/phonecase.png",
  },
  {
    name: "2023 calendar A ver.",
    imageSrc: "/calendarA.jpg",
    href: "/pictures/calendarA.jpg",
  },
  {
    name: "2023 calendar B ver.",
    imageSrc: "/calendarB1.jpg",
    href: "/pictures/calendarB1.jpg",
  },
  {
    name: "2023 calendar C ver.",
    imageSrc: "/calendarB2.jpg",
    href: "/pictures/calendarB2.jpg",
  },
  // {
  //   name: "러브 레터, 55.5×40.0cm Watercolor",
  //   imageSrc: "/likedream.jpg",
  //   href: "/pictures/likedream.jpg",
  // },
];

export default function Main() {
  return (
    <div>
      <div>
        <div className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
          <div className="max-w-7xl mx-auto px-4 ">
            <h4 className="font-mono font-bold text-gray-800 text-xl">
              Collections
            </h4>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1">
                    <Link href={callout.href} key={callout.name}>
                      <a>
                        <Image
                          src={callout.imageSrc}
                          alt=""
                          width="700"
                          height="650"
                          // className="w-full h-full object-center object-cover"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2 ">
                    <span className="font-mono text-justify text-sm italic text-gray-600">
                      {callout.name}
                    </span>
                    {/* <p className="text-sm mt-2 font-light text-justify text-slate-900">
                      {callout.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
