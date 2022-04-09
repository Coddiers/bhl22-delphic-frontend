import React from 'react';
import styles from './UserApp.module.scss'   

const UserApp = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.smallSqContainer}>
                <div className={styles.smallSq}>VIDEO</div>
                <div className={styles.smallSq}>TEXT</div>
                <div className={styles.smallSq}>URL</div>
                <div className={styles.smallSq}>PICTURE</div>
            </div>
            <div className={styles.mainSquare}>
            
            <textarea className={styles.textArea} name="comment" form="usrform">COPY ARTICLE HERE...</textarea>
            <div className={styles.containerButtons}>
            <button className={styles.btnSecondary}>BACK</button>
            <button className={styles.btnPrimary}>CHECK</button>
            </div>
            </div>
        </div>
    );
};



export default UserApp;
