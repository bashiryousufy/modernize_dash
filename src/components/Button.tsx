import React from 'react';
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            type="button"
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-md border border-gray-200 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};