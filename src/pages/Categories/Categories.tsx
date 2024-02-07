import { IoIosAdd } from "react-icons/io";
import categories from '../../assets/categories.json';
import CategoryCard from "../../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

const Categories = () => {
    const navigate = useNavigate();

    return (
        <div className="lg:w-[78rem] md:w-[32rem] z-0">

            <div className="flex items-center justify-between flex-wrap mb-4">
                <span className="font-bold text-xl">Categories</span>
                <div className="flex justify-center">
                    <Button
                        onClick={() => navigate('/categories/create')}
                        className="text-white bg-blue-600 hover:bg-blue-500"
                    >
                        <IoIosAdd size={30} />
                        <span>Add Category</span>
                    </Button>
                </div>
            </div >

            <div className="flex gap-8 flex-wrap">
                {categories.map(category => (
                    <CategoryCard
                        title={category.name}
                        description={`${category.items.length} items`}
                        imageUrl={category.img_url}
                        to={`/categories/${category.id}`}
                    />
                ))}
            </div>

        </div >
    )
}

export default Categories