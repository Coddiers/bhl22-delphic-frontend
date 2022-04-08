import React from 'react';
import styles from './Page.module.scss'
import {Link} from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineQuestionCircle, AiOutlineCheckSquare} from "react-icons/ai"
import {MdInput} from "react-icons/md"

const Page = () => {

    return (
        <div className={styles.container}>
            <div id={"page"} className={styles.page}>
                <div className={styles.checks}>
                    <h3>CHECK IF VIDEO IS FAKE</h3>
                    <h3>CHECK IF PICTURE IS FAKE</h3>
                    <h3>CHECK IF ARTICLE IS FAKE</h3>
                </div>
                <h1>Want to check if news are fake?</h1>
                <Link to="user-app">
                    <button>Try it now</button>
                </Link>
                <div className={styles.flowContainer}>
                    <div className={styles.block}>
                        <MdInput size={100}/>
                    </div>
                    <AiOutlineArrowRight size={100}/>
                    <div className={styles.block}>
                        <AiOutlineQuestionCircle size={100}/>
                    </div>
                    <AiOutlineArrowRight size={100}/>
                    <div className={styles.block}>
                        <AiOutlineCheckSquare size={100}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
