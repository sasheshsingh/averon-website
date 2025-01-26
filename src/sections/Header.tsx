import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
export const Header = () => {
  return <header className="py-4 border-b border-white/15 top-0 z-10">
    <div className="container">
      <div className="flex justify-between items-center">
        <div>
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="h-8 w-8"/>
          </div>
        </div>
        <div>
          <nav className="flex gap-8 text-sm">
            <a href="#" className=" text-gray-400 font-medium hover:text-white transition">Skyline</a>
            <a href="#" className="text-gray-400 font-medium hover:text-white transition">Skyline</a>
            <a href="#" className=" text-gray-400 font-medium hover:text-white transition">Skyline</a>
            <a href="#" className=" text-gray-400 font-medium hover:text-white transition">White</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <button className="border py-2 px-3 rounded-lg font-medium text-sm">Join Waitlist</button>
        </div>
      </div>
    </div>
  </header>;
};
