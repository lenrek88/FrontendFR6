import './App.css';
import Typography from "@mui/material/Typography";
import AddTask from './components/addTask';
import Tasks from './components/Tasks';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskProvider>
          <Typography variant="h3" align='left' sx={{margin: "5vh"}} color={'#2196F3'}>TODO</Typography>
          <AddTask/>
          <Tasks columnName="План"/>
          <Tasks columnName="Готово"/>
        </TaskProvider>
      </header>
    </div>
  );
}

export default App;
