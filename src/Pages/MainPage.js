import React from "react";
import styles from "./MainPage.module.css"
import { Outlet } from "react-router-dom";

export const MainPage = () => {

    return (
        <div className={styles.Main}>
            <Outlet />
        </div>
    );
};
