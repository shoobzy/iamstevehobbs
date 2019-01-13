import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="o-Footer o-Container">
        <p>Built with React, Bundled in ParcelJS</p>
        <p>&copy;{(new Date().getFullYear())} Steve Hobbs</p>
      </div>
    )
  }
}

export default Footer;
