import { AddTaskModal } from "@/components/module/AddTaskModal";
import { seletTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import TaskCard from './../components/module/TaskCard';

const Tasks = () => {

    const task = useAppSelector(seletTasks)

    console.log(task);
    return (
        <div className="max-w-7xl mx-auto py-7"> 
        <AddTaskModal/>
        {
            task.map(task => <TaskCard key={task.id} task={task} />)
        }
        
        </div>
    );
};

export default Tasks;