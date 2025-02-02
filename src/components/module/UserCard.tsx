import { IUser } from "@/types";

interface IProp {
  user: IUser;
}

const UserCard = ({ user }: IProp) => {
  return (
    <div className="border border-gray-400 my-2 p-5">
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;
