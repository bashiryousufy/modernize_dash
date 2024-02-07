import { Button } from "./Button";

interface IconButtonProps {
    onClick?: () => void;
    title: string;
    icon: React.ReactNode
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, title, icon }) => {
    return (
        <Button
            onClick={onClick}
            className="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-md text-sm"
        >
            <div className="flex items-center gap-2">
                {icon}
                <span>{title}</span>
            </div>
        </Button>
    );
};