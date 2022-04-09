import React from 'react';
import styles from "./UserApp.module.scss";

function UrlInput(props) {
    return (
        <div className={styles.urlContainer}>
            <h1>
                <textarea className={styles.urlArea} name="url" form="urlform">COPY URL HERE...</textarea>
            </h1>
            <div className={styles.searchIcon}></div>
        </div>
    );
}

export default UrlInput;
