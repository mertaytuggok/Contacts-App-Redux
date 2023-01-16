import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    contactSelectors,
    removeAllContact,
} from "../../Redux/Slice/contactSlice";
import { Item } from "../Item/Item";
import styles from "./List.module.css"

export const List = () => {
    const contacts = useSelector(contactSelectors.selectAll);
    const total = useSelector(contactSelectors.selectTotal);

    const dispatch = useDispatch();
    const handleDeleteAll = () => {
        if (window.confirm("are you sure?")) {
            dispatch(removeAllContact());
        }
    };
    return (
        <>
            {total > 0 && (<>
                <div className={styles.deleteAllButton} onClick={handleDeleteAll}>
                    Delete All
                </div>
                <hr /></>
            )}

            <ul className={styles.itemList}>
                {contacts.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};
