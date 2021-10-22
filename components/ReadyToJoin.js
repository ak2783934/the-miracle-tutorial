import Link from "next/link";
import Image from "next/image";

const ReadyToJoin = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 w-24 h-6 pt-1 text-center text-white align-middle bg-red-500 text-tiny sm:h-8 sm:w-40 sm:text-sm rounded-2xl bottom-8 sm:bottom-20 left-20 sm:left-56 hover:bg-red-700">
        <Link href="/admission">
          <a>Get Started Now</a>
        </Link>
      </div>
      <div className="relative z-0 w-full bg-blue-200 sm:h-72 h-36">
        <Image src="/readytojoin.png" layout="fill" />
      </div>
    </div>
  );
};

export default ReadyToJoin;
