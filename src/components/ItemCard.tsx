import { Item } from "../types/Category";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

interface ItemCardProps {
    item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className="flex items-center justify-between border-2 h-20 mb-4 p-3">
            <div className="flex items-center gap-4">
                <HiOutlineDotsVertical size={25} />
                <img src={item.img_url} alt="" className="w-12 h-12 rounded" />
                <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex items-center gap-4 mr-3">
                <CiEdit size={25} />
                <MdOutlineDelete size={25} />
            </div>
        </div>
    )
}

export default ItemCard