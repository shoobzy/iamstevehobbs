import React from 'react';

const data = require('./data.json').slice(0, 4);
import ActivityItem from './components/Timeline/GithubActivityItem';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      activities: []
    };
  }

  componentDidMount() {
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({loading: true}, this.updateData);
    }
  }

  // Call out to github data and refresh directory
  updateData() {
    this.setState(
      {
        loading: false,
        activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
      },
      this.props.onComponentRefresh
    );
  }

  render() {
    const {loading, activities} = this.state; // ES6 destructuring

    return (
      <div className="content">
        <div className="line"></div>
        {/* Show loading message if loading */}
        {loading && <div>Loading</div>}
        {/* Timeline item */}
        {activities.map(activity => (
          <ActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    );
  }
}

export default Content;
