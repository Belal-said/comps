import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../../hooks/useThunk";
import { fetchUsers, postUser } from "../../store";
import Button from "../Button";
import Skeleton from "./Skeleton";



function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doPostUser, isPostingUser, postingUserError] = useThunk(postUser)

    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handlePostUser = () => {
        doPostUser()
    };

    if (isLoadingUsers) {
        return (
            <div>
                <p>Loading...</p>
                <Skeleton times={6} className="skeleton" />
            </div>
        );
    }

    if (loadingUsersError) {
        return <div>Error fetching data...</div>;
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded border-gray-300">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                    <Button loading={isPostingUser} onClick={handlePostUser}>+ Add User</Button>
                {postingUserError && "Error creating user..."}
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;
