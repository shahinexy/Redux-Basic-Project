import { ITask } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    task: ITask
}

const TaskCard = ({task}: IProps) => {
  return (
    <div className="border border-gray-400 my-2 p-5">
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-3 items-center">
          <div className={cn('size-3  inline-block rounded-full', {
            "bg-green-500": task.priority === 'Low',
            "bg-yellow-500": task.priority === 'Medium',
            "bg-red-500": task.priority === 'High'
          })}></div>
          <p>{task?.title}</p>
        </div>
        <div className="flex gap-3">
            <Button>Delete</Button>
            <input type="checkbox" name="" id="" />
        </div>
      </div>
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
