import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue accent-3">
          <a className="left brand-logo">Worldnet</a>
          <ul className="right" />
        </div>
      </nav>
    );
  }
}

export default Header;
