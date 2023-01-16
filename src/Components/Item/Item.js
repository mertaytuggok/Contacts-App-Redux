import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../Redux/Slice/contactSlice";
import styles from "./Item.module.css"
export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm("are you sure?")) {
            dispatch(deleteContact(id));
        }
    };
    return (
        <li className={styles.itemMain}>
            <div className={styles.textMain}>
                <div className={styles.itemList}>
                    <label>Name</label>
                    <span>{item.name}</span>
                </div>
                <div className={styles.itemList}>
                    <label>Phone Number</label>
                    <span>{item.phone_number}</span>
                </div>
            </div>
            <div >
                <span >
                    <Link className={styles.Edit} to={`/edit/${item.id}`}>Edit</Link>
                </span>
                <span className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                    X
                </span>
            </div>
        </li>
    );
};
