import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  StyleSheet,
} from 'react-native';
import PostFeed from './PostFeed';
import * as actionCreators from '../actions/actionCreators';
import { fetchPostsIfNeeded, addCount } from '../actions/actionCreators';
// import action from '../actions/actionCreators.js'


class RedditNative extends Component {
  constructor(props) {
    super(props)
  }

  // when component mounts
  componentDidMount() {
    // console.log('CDM > props: ', this.props)
    this.props.actions.fetchPostsIfNeeded()
  }
  
  render() {
    const { posts, isFetching, nav, actions, itemIndex } = this.props
    // console.log('RN-props: ', this.props);
    return (
      <View style={styles.mainContainer}>
        {isFetching && posts.length === 0 && <Text style={styles.center}>Loading...</Text> }
        {!isFetching && posts.length === 0 && <Text style={styles.center}>Empty.</Text> }
        {posts.length > 0 &&
          <View>
            <PostFeed posts={posts} nav={nav} actions={actions} isFetching={isFetching} props={this.props} />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {

  },
  center: {
    marginTop: 100,
    textAlignVertical: "center",
    textAlign: "center",
  }
})

function mapStateToProps(state) {
  // console.log('mapStateToProps - state: ', state)
  return {
    posts: state.posts.items,
    isFetching: state.posts.isFetching,
    nav: state.nav,
    itemIndex: state.posts.itemIndex
  }
}

// function used to dispatch actions
function mapDispatchToProps (dispatch) {
    // console.log('dispatch: ', dispatch)
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

RedditNative.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}


// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props

export default connect(mapStateToProps, mapDispatchToProps)(RedditNative);
