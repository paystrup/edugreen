// Inspiration from https://youtu.be/_7gdsAfFV9o 

import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

// ❌❌❌❌❌❌❌❌ DELETE BOOKS ❌❌❌❌❌❌❌❌❌
export default function DeleteArticle({ id, imageUrl }) {
    // props imported from BookPage.js
    // id is needed to delete book from FireStore collection
    // imageUrl is needed to delete our image from FireBase Storage
    const navigate = useNavigate();

    // handledelete of button, async function
    const handleDelete = async () => {
        // show alert, and if user confirms -> delete the book
        if (window.confirm("Er du sikker på, du vil slette annoncen?")) {
            try {
            
            // delete the doc from FireStore, articles = our collection, id = our books unique ID
            await deleteDoc(doc(db, "articles", id));

            // if success show toast for UX
            toast("Din annonce er nu slettet.", { type: "success" });

            // go to FireBase Storage and delete the img stored
            const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef);

            // navigate to users profile after successful deletion
            navigate("/profile")

            } catch (error) {
            
            // catch error and show error msg as toast
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