import React from "react";
import styles from "./MainPage.module.css"
import { Form } from "../Components/Form/Form";
import { List } from "../Components/List/List";
import { contactSelectors } from "../Redux/Slice/contactSlice";
import { useSelector } from "react-redux";

export const AddContacts = () => {
    const total = useSelector(contactSelectors.selectTotal);

    return (
        <div>
            <h1 className={styles.Title}>CONTACTS ({total})</h1>
            <Form />
            <List />
        </div>
    );
};
