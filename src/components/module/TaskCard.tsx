import { ITask } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, toggleConpleteState } from "@/redux/features/task/taskSlice";

interface IProps {
    task: ITask
}

const TaskCard = ({task}: IProps) => {

  const dispatch = useAppDispatch()

  return (
    <div className="border border-gray-400 my-2 p-5">
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-3 items-center">
          <div className={cn('size-3  inline-block rounded-full', {
            "bg-green-500": task.priority === 'Low',
            "bg-yellow-500": task.priority === 'Medium',
            "bg-red-500": task.priority === 'High'
          })}></div>
          <p className={cn({'line-through': task.isCompleted})}>{task?.title}</p>
        </div>
        <div className="flex gap-3">
            <Button onClick={()=> dispatch(deleteTask(task.id))}>Delete</Button>
            <input type="checkbox" checked={task.isCompleted} onClick={()=> dispatch(toggleConpleteState(task.id))} />
        </div>
      </div>
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
