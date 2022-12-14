// Inspiration from https://youtu.be/_7gdsAfFV9o 
import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import { UddannelserList } from "../data/uddannelserDK";
import UploadCameraIcon from "../assets/svg/cameraicon.svg";

// OPRET BOG - ADD BOOK TO DB 📚
export default function AddArticle() {

  console.log(auth.currentUser); // check auth with Google works

  // our state for logging inputdata we have to send to FireStore
  // using auth to access current user signed in info
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    edition: "",
    education: "",
    year: "",
    description: "",
    image: "",
    condition: "",
    price: "",
    createdAt: Timestamp.now().toDate(),
    user: auth.currentUser.uid,
    userImage: auth.currentUser.photoURL,
    userName: auth.currentUser.displayName,
  });

  const navigate = useNavigate();

  // state for later, progressbar on img upload
  const [progress, setProgress] = useState(0);

  // returns from onChange values below, takes the event and returns
  // Everytime form fields changes
  // appends to array and sets the state with the input name and value 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Onsubmit, handle the data transfer to firebase firestore
  const handlePublish = () => {
    // validate inputs, if empty return error - all except ISBN (not many remembers this value)
    if (
      !formData.title ||
      !formData.author ||
      !formData.edition ||
      !formData.education ||
      !formData.year ||
      !formData.description ||
      !formData.image ||
      !formData.price ||
      !formData.condition
    ) {
      alert("Husk at udfyld alle felterne");
      return;
    }

    // Alert for price too low, check if price is between 2-2000 DKK or return alert
    if (formData.price < 2 || formData.price > 2000) {
      alert(
        "Din pris er uden for grænsen. Indtast en ny pris mellem 2-2000 DKK"
      );
      return;
    }

    // from firebase, takes into 2 params, 1 = storage, 2 = new folder
    // creating a new name for the img files with timestamp and img name
    // add this to FireBase Storage to backup images
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    // check how many bytes are uploaded to server
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    // Show and log the progress on imageUpload for the progressbar
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(progressPercent);
      },
      (err) => {
        console.log(err); // log error
      },
      // set state and store form data
      () => {
        setFormData({
          title: "",
          author: "",
          ISBN: "",
          edition: "",
          education: "",
          year: "",
          description: "",
          image: "",
          condition: "",
          price: "",
          user: auth.currentUser.uid,
          userImage: auth.currentUser.photoURL,
          userName: auth.currentUser.displayName,
        });

        //adddoc is a promise
        // add values stored in the state to the collection and new doc with addDoc
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
            education: formData.education,
            condition: formData.condition,
            year: formData.year,
            createdAt: Timestamp.now().toDate(),
            user: auth.currentUser.uid,
            userImage: auth.currentUser.photoURL,
            userName: auth.currentUser.displayName,
          })
            // confirmation toast + redirect after successful book upload
            .then(() => {
              toast("Din bog er nu sat til salg", { type: "success" });
              // reset progress on success
              setProgress(0);

              return navigate("/profile");
            })
            // catch error toast, if article wasn't uploaded
            .catch((err) => {
              toast("Der er sket en fejl. Prøv igen.", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className="paddingWide opretBogForm PaddingPage bigscreenpadding">
      <h2 className="font-header paddingHeader">Opret bogsalg</h2>

      <div className="bogSalgInputContainer">
        {/* Title */}
        <input
          id="bookTitle"
          type="text"
          name="title"
          className="form-control"
          placeholder="Titel"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />

        {/* Author(s) */}
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
          type="text"
          name="ISBN"
          className="form-control"
          placeholder="ISBN"
          value={formData.ISBN}
          onChange={(e) => handleChange(e)}
        />

        <div className="flex gap1">
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

          {/* Year */}
          <input
            id="year"
            type="number"
            name="year"
            className="form-control"
            placeholder="Årstal"
            value={formData.year}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Education */}
        <select
          id="education"
          name="education"
          placeholder="Uddannelse"
          className="form-control"
          value={formData.education}
          onChange={(e) => handleChange(e)}
        >
          <option value="" disabled defaultValue>
            

            Vælg uddannelse
          </option>
          {UddannelserList.map(({ uddannelse, id }, index) => {
            return (
              <option value={uddannelse} key={id}>
                {uddannelse}
              </option>
            );
          })}
        </select>

        <hr className="line"/>

        {/* Description */}
        <label htmlFor="" className="font-header">
          Beskrivelse
        </label>
        <p className="font-bodytextBig fc-darkgrey">
          Angiv information omkring bogen,{" "}
          <span className="font-bodytextBigBold fc-black">
            om der er overstregninger
          </span>
          , eventuelle fejl og mangler, der er værd at vide for køber.
        </p>
        <textarea
          name="description"
          className="form-control"
          placeholder="Beskrivelse"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />

        <hr className="line"/>

        {/* Image */}
        <label className="font-header">Tilføj billeder</label>
        <p className="font-bodytextBig fc-darkgrey">
          Vi anbefaler min. 3 billeder for hurtigere salg
        </p>
        <label htmlFor="imageUpload" className="font-header custom-file-upload">
          <img src={UploadCameraIcon} alt="CameraIcon"></img>
        </label>
        {/* upload Image input*/}
        <input
          id="imageUpload"
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          onChange={(e) => handleImageChange(e)}
        />

        {/* Progress - if progress is 0 return none */}
        {progress === 0 ? null : (
          <div className="progress">
            <div
              className=""
              style={{ width: `${progress}%` }}
            >
              <p>{`Uploading image ${progress}%`}</p>
            </div>
          </div>
        )}

        <hr className="line"/>

        {/* Condition */}
        <label htmlFor="" className="font-header">
          Hvordan er standen?
        </label>

        <select
          id="condition"
          name="condition"
          placeholder="Bogens stand"
          className="form-control"
          value={formData.condition}
          onChange={(e) => handleChange(e)}
        >
          <option className="optioncolor" value="" disabled defaultValue>
            Vælg bogens stand
          </option>
          <option value="Som ny">Som ny</option>
          <option value="God">God</option>
          <option value="Lidt brugt">Lidt brugt</option>
          <option value="Meget brugt">Meget brugt</option>
        </select>
        
        {/* Price */}
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

      {/* Button upload bookpost */}
      <button
        className="btn-large bg-green fc-white font-btn"
        onClick={handlePublish}
      >
        Sæt til salg
      </button>
    </div>
  );
}
