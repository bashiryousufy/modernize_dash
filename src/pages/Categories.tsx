import { IconButton } from "../components/IconButton"
import { IoIosAdd } from "react-icons/io";
import categories from '../assets/categories.json';
import Card from "../components/Card";

const Categories = () => {
    return (
        <div className="lg:w-[78rem] md:w-[32rem] ">
            <div className="flex items-center justify-between flex-wrap mb-4">
                <span className="font-bold text-xl">Categories</span>
                <div className="flex justify-center">
                    <IconButton
                        title="Add Category"
                        icon={<IoIosAdd size={30} />}
                    />
                </div>
            </div >

            <div className="flex gap-8 flex-wrap">
                {categories.map(category => (
                    <Card
                        title={category.name}
                        description={`${category.items.length} items`}
                        imageUrl={category.img_url}
                    />
                ))}

            </div>

        </div >
    )
}

export default Categories