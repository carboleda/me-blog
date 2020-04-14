import React from 'react';
import { classnames } from '../helpers/utitlities';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        };
    }

    onTogglerClick = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        const navigationClasses = classnames({
            'collapse': true, 'navbar-collapse': true,
            'flex-column': true, 'show': this.state.isShow
        });
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" onClick={this.onTogglerClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navigation" className={navigationClasses}>
                    {this.props.children}
                </div>

                <style jsx>
                    {
                        `
                        .show {

                        }
                        `
                    }
                </style>
            </nav>
        );
    }
}

export default Navbar;