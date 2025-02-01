import TaskCard from "@/components/module/taskCard";
import { seletTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {

    const task = useAppSelector(seletTasks)

    console.log(task);
    return (
        <div className="max-w-7xl mx-auto py-7"> 
        {
            task.map(task => <TaskCard key={task.id} task={task} />)
        }
        
        </div>
    );
};

export default Tasks;