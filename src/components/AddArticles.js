import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddArticle() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    edition: "",
    description: "",
    image: "",
    price: "",
    createdAt: Timestamp.now().toDate(),
  });
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  
  // returns from onChange values below, takes the event and returns
  // hver gang form felter ændres
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // onsubmit
  const handlePublish = () => {
    if (!formData.title || !formData.image || !formData.price) {
      alert("Husk at udfyld alle felterne");
      return;
    }

    // alert for price too low
    if (formData.price < 2 || formData.price > 2000) {
      alert(
        "Din pris er uden for grænsen. Indtast en ny pris mellem 2-2000 DKK"
      );
      return;
    }

    // from firebase, takes into 2 params, 1 = storage, 2 = new folder
    // creating a new name for the img files
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          author: "",
          ISBN: "",
          edition: "",
          description: "",
          image: "",
          price: "",
        });

        //adddoc is a promise
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            author: formData.author,
            ISBN: formData.ISBN,
            edition: formData.edition,
            imageUrl: url,
            price: formData.price,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              //reset progress on success
              setProgress(0);
            
              return navigate ("/profile" ) 
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );

  };

  return (
    <div className="paddingWide opretBogForm">
      <h2 className="font-header paddingHeader">Opret bogsalg</h2>

      <div className="bogSalgInputContainer">
        {/* title */}
        <input
          id="bookTitle"
          type="text"
          name="title"
          className="form-control"
          placeholder="Titel"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />

        {/* author */}
        <input
          id="author"
          type="text"
          name="author"
          className="form-control"
          placeholder="Forfatter(ere)"
          value={formData.author}
          onChange={(e) => handleChange(e)}
        />

        {/* ISBN */}
        <input
          id="ISBN"
          type="number"
          min="1"
          max="9999999"
          step="1"
          name="ISBN"
          className="form-control"
          placeholder="ISBN"
          value={formData.ISBN}
          onChange={(e) => handleChange(e)}
        />

        {/* Edition */}
        <input
          id="edition"
          type="number"
          name="edition"
          className="form-control"
          placeholder="Udgave"
          value={formData.edition}
          onChange={(e) => handleChange(e)}
        />

        {/* description */}
        <label htmlFor="" className="font-header">
          Beskrivelse
        </label>
        <textarea
          name="description"
          className="form-control"
          placeholder="Beskrivelse"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />

        {/* image */}
        <label htmlFor="imageUpload" className="font-header">
          Billeder
        </label>
        <p className="font-bodytextBig fc-darkgrey">
          Vi anbefaler min. 3 billeder for hurtigere salg
        </p>
        <input
          id="imageUpload"
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          onChange={(e) => handleImageChange(e)}
        />

        {/* price */}
        <label htmlFor="" className="font-header">
          Hvad skal prisen være?
        </label>
        <input
          type="number"
          name="price"
          className="form-control"
          min="2"
          placeholder="Pris i DKK"
          value={formData.price}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* progress - if progress is 0 return none */}
      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}

      <button
        className="btn-large bg-green fc-white font-btn"
        onClick={handlePublish}
      >
        Sæt til salg
      </button>
    </div>
  );
}
