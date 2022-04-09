import React from 'react';
import styles from './Page.module.scss'
import {Link} from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineQuestionCircle, AiOutlineCheckSquare} from "react-icons/ai"
import {MdInput} from "react-icons/md"

const Page = () => {

    return (
        <div className={styles.container}>
            <div id={"page"} className={styles.page}>
                <div className={styles.bgPicture}>
                    <div className={styles.hero}>
                        <nav className={styles.navbar}>
                            <div className={styles.logo}></div>
                        </nav>
                        <div className={styles.helper}>
                            <div>
                                <h1 className={styles.mainText}>Want to check if news are fake?</h1>
                            </div>
                            <Link to="user-app">
                                <button className={styles.tryNow}>TRY IT NOW</button>
                            </Link>
                            <div className={styles.flow}>
                                <div className={styles.flowSecond}>
                                    <div className={styles.rectng}>
                                        <div className={styles.import}></div>
                                    </div>
                                    <h2 className={styles.secondText}>IMPORT YOUR DATA TO VERIFY</h2>
                                </div>
                                <div className={styles.arrow}>
        
                                </div>
                                <div className={styles.flowSecond}>
                                    <div className={styles.rectng}>
                                         <div className={styles.check}></div>
                                    </div>
                                    <h2 className={styles.secondText}>CHECK IF DATA IS FAKE WITH DEEP NEURAL NETWORKS</h2>
                                </div>
                                <div className={styles.arrow}>
        
                                </div>
                                <div className={styles.flowSecond}>
                                    <div className={styles.rectng}>
                                        <div className={styles.results}></div>
                                    </div>
                                    <h2 className={styles.secondText}>GET YOUR RESULTS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutUs}>

                </div>
            </div>
        </div>
    );
};

export default Page;
