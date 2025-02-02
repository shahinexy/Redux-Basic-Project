import { AddUserModal } from "@/components/module/AddUserModal";
import UserCard from "@/components/module/UserCard";
import { SeletUser } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hooks";

const User = () => {
  const users = useAppSelector(SeletUser);
  console.log(users);
  return (
    <div className="max-w-7xl mx-auto py-7">
      <AddUserModal />
      <div className="grid grid-cols-5 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
