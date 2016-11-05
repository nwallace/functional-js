import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    errors: PropTypes.arrayOf(PropTypes.string),
  },

  render() {
    if (this.props.errors && this.props.errors.length > 0) {
      let errorItems = [];
      for (let i=0; i < this.props.errors.length; i++) {
        errorItems.push(<li key={i}>{this.props.errors[i]}</li>);
      }
      return <ul className="errors">{errorItems}</ul>;
    } else {
      return null;
    }
  },
});
