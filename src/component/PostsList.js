import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../reducer/postSlice';
import PostAuthor from '../component/PostAuthor';
import TimeAgo from '../component/TimeAgo';
import ReactionButtons from '../component/ReactionButtons';
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  console.log('values from right' + posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
