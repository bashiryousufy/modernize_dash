import { useState } from "react";

interface User {
    name: string;
    email: string;
}

type UpdateUser = (updatedUser: Partial<User>) => void;

export function useCurrentUser(): [User, UpdateUser] {
    const [currentUser, setCurrentUser] = useState<User>({
        name: "X’eriya Ponald",
        email: "xeriya@example.com",
    });

    const updateUser: UpdateUser = (updatedUser) => {
        setCurrentUser({ ...currentUser, ...updatedUser });
    };

    return [currentUser, updateUser];
}
