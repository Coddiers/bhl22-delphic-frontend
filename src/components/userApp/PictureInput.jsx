import React from 'react';
import styles from "./UserApp.module.scss";
import {useNavigate} from "react-router-dom";

function PictureInput(props) {
    const navigate = useNavigate();

    return (
        <div>
        <div className={styles.boxInput}>

        <input className={styles.boxFile} type="file"  name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
        <label className={styles.lblUpload} for="file">
            <h1 className={styles.textUpload}>DROP YOUR VIDEO FILE HERE</h1>
            <div className={styles.uploadImg}></div>
            </label>
        </div>
        <div className={styles.containerButtons}>
                <button className={styles.btnSecondary1} onClick={() => navigate("/")}>BACK</button>
                <button className={styles.btnPrimary}>CHECK</button>
            </div>
    </div>
    );
}

export default PictureInput;
