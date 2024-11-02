import '../../index.css';
import { ThemeSwitch } from '../ThemeSwapper'
import { SighOut } from '../../utils/SighOut';

export const Navbar = ({ isDark }: { isDark: boolean }) => {
  const handleLogout = () => {
    SighOut();
  };
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
      <a href='/' className={`self-left text-2xl font-semibold whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}>
        Where in the world?
      </a>

      <div className="flex md:order-2 space-x-3 rtl:space-x-reverse gap-5">
        <ThemeSwitch />
      </div>
      <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-theme rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a href="/register" className={`block py-2 px-3 md:p-0 rounded hover:bg-primary ${isDark ? 'text-white' : 'text-black'}`}>
              Register
            </a>
          </li>
          <li>
            <a href="/login" className={`block py-2 px-3 md:p-0 rounded hover:bg-primary ${isDark ? 'text-white' : 'text-black'}`}>
              Login
            </a>
          </li>
        </ul>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-white p-2 w-24"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
