

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <h2>{task.temps}</h2>
      
    </div>
  );
};

export default TaskItem;
