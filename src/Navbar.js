import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/login" && pathname !== "/volunteer-signup" && (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <Link
                  to="/about"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  to="/causes"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Causes
                </Link>
                <Link
                  to="/donation-steps"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  How to Donate
                </Link>
                <Link
                  to="/volunteer-signup"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Volunteer
                </Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {pathname !== "/" ||
                  pathname !== "/donation-steps" ||
                  pathname !== "/causes" ||
                  (pathname !== "/about" && (
                    <Link
                      to="/login"
                      className="mt-6 inline-block bg-white text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-white"
                    >
                      Log in
                    </Link>
                  ))}
              </div>
            </nav>
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-50"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        to="/about"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/causes"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Causes
                      </Link>
                      <Link
                        to="/donation-steps"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        How to Donate
                      </Link>
                      <Link
                        to="/volunteer-signup"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Volunteer
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
}

export default Navbar;
