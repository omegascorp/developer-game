import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from "react-navigation";
import { addRootListener } from "../services/storeService";

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default function(Component) {
  const Class = class extends React.Component {
    render() {
      return (
        <Component navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener: addRootListener,
        })} />
      );
    }
  };

  return connect(mapStateToProps)(Class);
}
