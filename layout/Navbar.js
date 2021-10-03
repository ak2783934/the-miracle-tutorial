const Navbar = () => {
  return (
    <div className="flex h-16 bg-blue-300 px-28">
      <div className="flex justify-between w-full px-4 mx-auto max-w-7xl">
        <div className="flex self-center justify-start text-base font-bold text-white lg:text-xl">
          THE MIRACLE TUTORIAL
        </div>
        <div className="flex self-center justify-end">
          <ul className="flex flex-row space-x-4 text-base lg:text-lg lg:space-x-10">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Admission</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
