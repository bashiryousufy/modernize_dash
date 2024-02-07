import { useState, useMemo } from 'react';
import categoriesJson from '../assets/categories.json';
import { Category } from '../types/Category';

const useCategoryById = () => {
    const [categories,] = useState<Category[]>(categoriesJson);

    const getCategoryById = (id: number) => {
        return categories.find(category => category.id === id);
    };

    const getCategoryByIdMemoized = useMemo(() => getCategoryById, [categories]);

    return getCategoryByIdMemoized;
};

export default useCategoryById;
