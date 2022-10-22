import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function DeleteArticle({ id, imageUrl }) {
    // props imported from BookPage.js
    const navigate = useNavigate();

    // handledelete of button
    const handleDelete = async () => {
    
    // user confirms to delete the book
    if (window.confirm("Er du sikker på, du vil slette annoncen?")) {
        try {
        
        // delete the doc from firestore, articles by id
        await deleteDoc(doc(db, "articles", id));

        // if success show toast
        toast("Din annonce er nu slettet.", { type: "success" });

        // go to storage and delete the img stored
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
        navigate("/profile")

        } catch (error) {
        
        // error msg toast
        toast("Der er sket en fejl.", { type: "error" });
        console.log(error);
        }
    }
    };

    return (
        <div>
            <button className="font-btn btn-large bg-red fc-white" onClick={handleDelete}>Slet dit opslag</button>
        </div>
    );
}