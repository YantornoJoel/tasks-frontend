import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="flex flex-wrap gap-16">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/ddbujqxjh/image/upload/v1689440193/Typescript_logo_2020_xrrqwc.svg"
              className="h-8 mr-3"
              alt="Tupaca Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tupaca
            </span>
          </NavLink>
          <div
            className="items-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="active:text-blue-700 focus:text-blue-700 block py-2 pl-3 pr-4 text-gray-200 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:dark:text-blue-500"
                >
                  Estados
                </Link>
              </li>
              <li>
                <Link
                  to="/list"
                  className="active:text-blue-700 focus:text-blue-700 block py-2 pl-3 pr-4 text-gray-200 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:dark:text-blue-500"
                >
                  Listado
                </Link>
              </li>
              <li>
                <Link
                  to="/new"
                  className="active:text-blue-700 focus:text-blue-700 block py-2 pl-3 pr-4 text-gray-200 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:dark:text-blue-500"
                >
                  Subir
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:order-2">
          <a
            type="button"
            href="https://www.tupaca.com/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank"
          >
            Visitar
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
