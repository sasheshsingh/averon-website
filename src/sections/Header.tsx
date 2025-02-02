import LogoIcon from "@/assets/logo.svg";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 top-0 z-10 bg-transparent">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <a href="/"><LogoIcon className="h-8 w-8" /></a>
            </div>
          </div>
          <div>
            <nav className="flex gap-8 text-1xl">
              <a
                  href="/"
                  className=" text-gray-400 font-bold hover:text-white transition"
              >
                Home
              </a>
              <a
                  href="/home-security"
                  className=" text-gray-400 font-medium hover:text-white transition"
              >
                Home Security
              </a>
              <a
                  href="/skyline"
                  className="text-gray-400 font-medium hover:text-white transition"
              >
                Skyline
              </a>
              <a
                  href="/contact-us"
                  className=" text-gray-400 font-medium hover:text-white transition"
              >
                Contact Us
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/contact-us" className="border py-2 px-3 rounded-lg font-medium text-sm">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
