import React from 'react';
import DemoCounter from './component/DemoCounter';
import AddPostForm from './component/AddPostForm';
import PostsList from './component/PostsList';
import Child from './Child';
function App() {
  return (
    <main className="App">
      <AddPostForm />
      {/* <PostsList /> */}
      <DemoCounter />
      <Child />
    </main>
  );
}
export default App;
