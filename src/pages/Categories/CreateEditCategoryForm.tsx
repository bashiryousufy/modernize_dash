import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button"
import { IoIosAdd, IoIosArrowRoundBack } from "react-icons/io";
import useCategoryById from "../../hooks/useCategoryById";
import { useEffect, useState } from "react";
import { Category } from "../../types/Category";
import ItemCard from "../../components/ItemCard";

const CreateEditCategoryForm: React.FC = () => {
    const [category, setCategory] = useState<Category>();
    const navigate = useNavigate();
    let { id } = useParams();

    const getCategoryById = useCategoryById();

    useEffect(() => {
        if (!id) return;
        setCategory(getCategoryById(parseInt(id)));
    }, [id]);

    return (
        <div className="lg:w-[78rem] md:w-[32rem] z-0">

            <div className="flex text-gray-500 hover:cursor-pointer " onClick={() => navigate(-1)}>
                <IoIosArrowRoundBack size={30} />
                <span>Back</span>
            </div>

            <div className="flex items-center justify-between flex-wrap mb-4">
                <span className="font-bold text-xl">Categories</span>
                <div className="flex justify-center flex-wrap">
                    <Button
                        className="bg-white text-blue-600"
                        onClick={() => navigate(-1)}
                    >Cancel </Button>
                    <Button
                        className="bg-blue-600 text-white"
                    >Save</Button>
                </div>
            </div>

            <div className="flex lg:gap-6">
                <div className=" bg-white h-screen rounded-md lg:w-9/12 p-6">
                    <div><span className="font-semibold">Products</span> <span className="text-gray-400">{category?.items.length}</span></div>
                    <div className="mt-4">
                        {category?.items.map(item => (<ItemCard item={item} />))}

                        <div className="flex items-center justify-center border-2 h-18 mb-4 p-3 text-blue-500">
                            <IoIosAdd size={30} />
                            <span>Product</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:w-3/12 lg:gap-6">
                    <div className="bg-white h-28 rounded-md p-5">
                        <span className="font-bold">Category Visibility</span>

                        <label className="relative inline-flex items-center cursor-pointer mt-4">
                            <input type="checkbox" value="" className="sr-only peer" checked></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visible on site</span>
                        </label>
                    </div>

                    <div className=" bg-white h-[26] rounded-md p-5">
                        <span className="font-bold">Category Info</span>

                        <div className="mt-4">
                            <span className="font-light text-xs mb-1">Category Name</span>
                            <input value={category?.name} type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                        </div>

                        <div className="mt-4">
                            <span className="font-light text-xs mb-1">Image</span>
                            <div className="w-full border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                <input type="file" className=" w-full h-full opacity-0 z-50" />
                                <div className="text-center flex flex-col justify-center items-center">
                                    <Button className="text-blue-600">
                                        <span>Add File</span>
                                    </Button>
                                    <p className="mt-1 text-xs text-gray-500">Or drag and drop files</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-end flex-wrap">
                <Button
                    className="bg-white text-blue-600"
                    onClick={() => navigate(-1)}
                >Cancel </Button>
                <Button
                    className="bg-blue-600 text-white"
                >Save</Button>
            </div>

        </div>
    )
}

export default CreateEditCategoryForm