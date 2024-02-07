import { useState } from "react";

export function useNotifications(): [number[], () => void] {
    const [notifications, setNotifications] = useState<number[]>(Array.from({ length: 5 }));

    const clearNotifications = () => {
        setNotifications([]);
    };

    return [notifications, clearNotifications];
}