

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <input type="checkbox" name="" id="task.id" value="{task.valueCheckBox}"/>
    </div>
  );
};

export default TaskItem;
