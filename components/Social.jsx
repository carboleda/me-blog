const Social = props => {
    return (
        props.social &&
        <ul className="social-list list-inline py-3 mx-auto">
            {
                props.social.map((item, index) => (
                    <li className="list-inline-item" key={`Social-${index}`} target="_blank">
                        <a href={item.url}>
                            <i className={`fab fa-${item.name} fa-fw`} />
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};

export default Social;