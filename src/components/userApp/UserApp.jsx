import React, {useState} from 'react';
import styles from './UserApp.module.scss'
import VideoInput from "./VideoInput";
import TextInput from "./TextInput";
import UrlInput from "./UrlInput";
import PictureInput from "./PictureInput";

const UserApp = () => {
    const [ selectedPage, setSelectedPage ] = useState(1);

    const tab = (nr) => {
        console.log(nr)
        setSelectedPage(nr)
    }

    return (
        <div className={styles.bg}>
            <div className={styles.smallSqContainer}>
                <div className={styles.smallSq} onClick={() => tab(1)}>PICTURE</div>
                <div className={styles.smallSq} onClick={() => tab(2)}>TEXT</div>
                <div className={styles.smallSq} onClick={() => tab(3)}>URL</div>
                <div className={styles.smallSq} onClick={() => tab(4)}>VIDEO</div>
            </div>
            <div className={styles.mainSquare}>
                {selectedPage === 1 && <VideoInput/>}
                {selectedPage === 2 && <TextInput/>}
                {selectedPage === 3 && <UrlInput/>}
                {selectedPage === 4 && <PictureInput/>}
            {/*<div className={styles.containerButtons}>*/}
            {/*<button className={styles.btnSecondary}>BACK</button>*/}
            {/*<button className={styles.btnPrimary}>CHECK</button>*/}
            {/*</div>*/}
            </div>
        </div>
    );
};



export default UserApp;
