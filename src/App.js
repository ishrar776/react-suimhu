import React from 'react';
import DemoCounter from './component/DemoCounter';
import AddPostForm from './component/AddPostForm';
import Child from './Child';
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <DemoCounter />
      <Child />
    </main>
  );
}
export default App;
