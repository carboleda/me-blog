const getIcon = (icon) => {
    if (icon == 'medium') {
        return `fab fa-${icon}`;
    }
    return `fas fa-${icon}`;
}

const Navbar = () => {
    return (
        <ul className="navbar-nav flex-column text-left">
            {
                process.env.NAVBAR_OPTIONS.map((option, index) => (
                    <li className="nav-item" key={`${option.name}-${index}`}>
                        <a className="nav-link" href={option.url}>
                            <i className={`${getIcon(option.icon)} fa-fw mr-2`}/>{option.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};

export default Navbar;