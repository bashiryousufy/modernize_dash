import React from 'react';
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Category } from '../types/Category';

interface CategoryCardProps {
    imageUrl: string;
    title: string;
    description: string;
    to: string;
    category?: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, title, description, to }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-md shadow-sm lg:w-96 lg:h-72">
            <Link to={to}>
                {imageUrl !== "" ?
                    <div className="relative">
                        <img className="rounded-t-md w-full h-48" src={imageUrl} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center  bg-gray-900 bg-opacity-50 opacity-0 transition-opacity duration-200 hover:opacity-100">
                            <div className="flex justify-center items-center px-2 bg-white rounded">
                                <CiEdit className="text-blue-500 rounded-full p-2 cursor-pointer " size={45} />
                                <span className='text-blue-500'>Edit</span>
                            </div>
                        </div>
                    </div>
                    : <img className="rounded-t-md w-full h-48" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" />}

            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                </a>
                <p className="text-xs font-extralight text-gray-700 ">{description}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
