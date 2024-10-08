import { useState } from "react";

const useItems = (initialItems, toUpper = false) => {
    const [items, setItems] = useState(initialItems);

    const addItem = (itemName) => {
        console.log("addItem Called");
        setItems(prevItems => {
            return [...prevItems, toUpper ? itemName.toUpperCase() : itemName];
        })
    }
    return [items, addItem]
}
export default useItems;
