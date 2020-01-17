import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;

    const index = this.props.posts.findIndex(
      (post) => post.code === postId
    );
    // console.log(index);
    const post = this.props.posts[index];
    // console.log(post);

    const postComments = this.props.comments[postId] || [];
    // console.log(postComments);

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
