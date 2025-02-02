import { removeUser } from "@/redux/features/users/userSlice";
import { IUser } from "@/types";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

interface IProp {
  user: IUser;
}

const UserCard = ({ user }: IProp) => {
    const dispatch = useDispatch()
  return (
    <div className="border border-gray-400 my-2 p-5 flex justify-between">
      <p>{user.name}</p>
      <div className="flex gap-3">
            <Button onClick={()=> dispatch(removeUser(user.id))}>Delete</Button>
        </div>
    </div>
  );
};

export default UserCard;
