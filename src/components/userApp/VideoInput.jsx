import React from 'react';
import styles from "./UserApp.module.scss";

function VideoInput(props) {
    return (
        <div>
            <div className={styles.boxInput}>
                
            <input className={styles.boxFile} type="file"  name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />  
            <label className={styles.lblUpload} for="file">
                <h1 className={styles.textUpload}>DROP YOUR VIDEO FILE HERE</h1>
                <div className={styles.uploadImg}></div>
                </label>
            </div>
        </div>
    );
}

export default VideoInput;
