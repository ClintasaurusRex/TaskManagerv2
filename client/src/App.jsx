import './App.css';

function App() {
  return (
    <>
      <h1>New task manager</h1>
      <div className='all-tasks'>
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}

function Task() {
  return (
    <>
      <main className='main-container'>
        <div className='tasks-title'>Tasks</div>
        <ul className='list-items'>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
          <li className='list-item'>task</li>
        </ul>
      </main>
    </>
  );
}

export default App;
