import { Counter, Input, ClassCounter, Post } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Input />
      <Post post={{id: 1, title: 'JavaScript', body: 'Post description'}}/>
    </div>
  );
}

export default App;
