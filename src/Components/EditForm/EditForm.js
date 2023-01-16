import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContact } from "../../Redux/Slice/contactSlice"
import styles from "../Form/Form.module.css"


export const EditForm = ({ contact }) => {
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.phone_number);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !number) return false;

        dispatch(
            updateContact({
                id: contact.id,
                changes: {
                    name,
                    phone_number: number,
                },
            })
        );

        navigate('/')
    };
    return (
        <div>
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
                    placeholder="Number"
                    className={styles.input}
                />
                <div className="btn">
                    {" "}
                    <button className={styles.Button} type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};
