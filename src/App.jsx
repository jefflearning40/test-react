import TaskItem from './exo3/TaskItem';

const App = () => {
  const tasks = [
    { id: 1, title: 'Faire le ménage', valueCheckBox: true },
    { id: 2, title: 'Cuisiner délicieux', valueCheckBox: false },
    { id: 3, title: 'Se reposer', valueCheckBox: false }
  ];

  return (
    <div>
      <h1>Liste des tâches</h1>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
