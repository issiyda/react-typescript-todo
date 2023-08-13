import './App.css';
import { ToDoList } from './pages/ToDoList';
import { CommonTemplate } from './templates/commonTemplate';

function App() {
  return (
    <div className="App">
      <CommonTemplate>
        <ToDoList />
      </CommonTemplate>
    </div>
  );
}

export default App;
