import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-md shadow-sm lg:w-96 lg:h-72">
            <a href="#">
                {imageUrl !== "" ?
                    <img className="rounded-t-md w-full h-48" src={imageUrl} alt="" />
                    : <img className="rounded-t-md w-full h-48 " src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="" />}
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                </a>
                <p className="text-xs font-extralight text-gray-700 ">{description}</p>
            </div>
        </div>
    );
};

export default Card;
