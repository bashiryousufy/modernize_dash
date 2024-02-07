export interface Category {
    id: number;
    name: string;
    img_url: string;
    items: Item[];
}

export interface Item {
    name: string;
    id: string;
    img_url: string;
}
