import React from 'react';

interface ExportButtonProps {
    onClick?: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-blue-500 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
            onClick={onClick}
        >
            Export
        </button>
    );
};

export default ExportButton;
