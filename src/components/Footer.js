import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>&copy;{(new Date().getFullYear())} Steve Hobbs</p>
        <p>Built with React, Bundled in ParcelJS</p>
      </div>
    )
  }
}

export default Footer;
