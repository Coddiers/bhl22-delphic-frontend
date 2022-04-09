import React from 'react';
import styles from "./UserApp.module.scss";

function TextInput(props) {
    return (
        <div>
            <h1>
                <textarea className={styles.textArea} name="comment" form="usrform">COPY ARTICLE HERE...</textarea>
            </h1>
            <div className={styles.containerButtons}>
                <button className={styles.btnSecondary1}>BACK</button>
                <button className={styles.btnPrimary}>CHECK</button>
            </div>
        </div>
    );
}

export default TextInput;
