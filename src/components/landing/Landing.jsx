import React from 'react';
import styles from './Landing.module.scss'
import { BsChevronDown } from 'react-icons/bs'
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import {Link} from 'react-scroll'

const Landing = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1>DELPHIC</h1>
                    <h3>Your daily fake news oracle</h3>
                    <Link to={"page"} spy={true} smooth={true}>
                        <BsChevronDown className={styles.btn} size={48}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
