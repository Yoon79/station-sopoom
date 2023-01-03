import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-4 mt-4 p-4 bg-white md:items-center justify-center md:p-6 ">
      <div>
        <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a className="hover:underline cursor-pointer">human_catnip_club</a>.
            All Rights Reserved.
          </span>
        </div>
        <div>
          <ul className="justify-center flex flex-wrap items-center mt-2 mb-2 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/products">
                <a className="mr-4 hover:underline cursor-pointer md:mr-6 ">
                products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a className="hover:underline cursor-pointer">about us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
