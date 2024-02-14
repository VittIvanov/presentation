import React, { useState } from "react";
import styles from './NiceGallery.module.css'

const NiceGallery = () => {

  const [activeDiv, setActiveDiv] = useState(null)


  const handleChangeClass = (divId) => {
    setActiveDiv((prevActiveDiv) => (prevActiveDiv === divId ? null : divId));
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.slide} ${activeDiv === "pic1" ? styles.active : ""}`}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
        onClick={() => handleChangeClass("pic1")}
      >
        <h3>Flower field</h3>
      </div>
      <div className={`${styles.slide} ${activeDiv === "pic2" ? styles.active : ""}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }}
        onClick={() => handleChangeClass("pic2")}
      >
        <h3>Sea coast</h3>
      </div>
      <div className={`${styles.slide} ${activeDiv === "pic3" ? styles.active : ""}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }}
        onClick={() => handleChangeClass("pic3")}
      >
        <h3>Green mountains</h3>
      </div>
      <div
        className={`${styles.slide} ${activeDiv === "pic4" ? styles.active : ""}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }}
        onClick={() => handleChangeClass("pic4")}
      >
        <h3>Mountain river</h3>
      </div>
      <div className={`${styles.slide} ${activeDiv === "pic5" ? styles.active : ""}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }}
        onClick={() => handleChangeClass("pic5")}
      >
        <h3>Deep forest</h3>
      </div>
    </div >
  )
}
export default NiceGallery;
