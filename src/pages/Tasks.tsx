import { AddTaskModal } from "@/components/module/AddTaskModal";
import { seletTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import TaskCard from "./../components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const task = useAppSelector(seletTasks);

  const dispatch = useAppDispatch()

  console.log(task);
  return (
    <div className="max-w-7xl mx-auto py-7">
      <div className="flex justify-between">
        <AddTaskModal />
        <Tabs defaultValue="all" >
          <TabsList>
            <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
