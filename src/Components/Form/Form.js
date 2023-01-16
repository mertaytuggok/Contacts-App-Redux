import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../Redux/Slice/contactSlice";
import styles from "./Form.module.css"
export const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !number) return false;
        dispatch(addContact({ id: nanoid(), name, phone_number: number }));
        setName("");
        setNumber("");
    };
    return (
        <div >
            <form className={styles.MainForm} onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className={styles.input}
                />{" "}
                <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Phone Number"
                    className={styles.input}
                />
                <div>
                    {" "}
                    <button className={styles.Button} type="submit">Add</button>
                </div>
            </form>

        </div>
    );
};
