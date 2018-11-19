import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="o-Grid c-Nav">
          <div>
              <a href="/">Steve Hobbs</a>
          </div>
          <div>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
