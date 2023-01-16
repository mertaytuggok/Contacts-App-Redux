import React from "react";
import { useSelector } from "react-redux";
import { useParams, redirect } from "react-router-dom";
import { contactSelectors } from "../../Redux/Slice/contactSlice";
import styles from "../../Pages/MainPage.module.css"
import { EditForm } from "../EditForm/EditForm";

export const Edit = () => {
    const { id } = useParams();

    const contact = useSelector((state) =>
        contactSelectors.selectById(state, id)
    );
    if (!contact) {
        return redirect("/");
    }

    return (
        <div>
            <h1 className={styles.Title}>Edit</h1>
            <EditForm contact={contact} />
        </div>
    );
};
