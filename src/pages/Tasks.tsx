import { seletFilter, seletTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {

    const task = useAppSelector(seletTasks)
    const filter = useAppSelector(seletFilter)

    console.log(task);
    console.log(filter);
    return (
        <div>
            this is task page
        </div>
    );
};

export default Tasks;