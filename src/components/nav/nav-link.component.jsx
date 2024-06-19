import { NavLink } from "react-router-dom";

function HeaderNavLink({ title, href }) {
    return (<NavLink to={href}

        className={({ isActive }) => isActive ?
            "block py-2 px-3 text-white bg-primary-900 rounded md:bg-transparent md:text-primary-900 md:p-0 dark:text-white md:dark:text-primary-700"
            :
            "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-900 md:p-0 dark:text-white md:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>
        {title}
    </NavLink>);
}

export default HeaderNavLink;