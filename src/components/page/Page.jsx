import React from 'react';
import styles from './Page.module.scss'

const Page = () => {
    return (
        <div className={styles.container}>
            <div id={"page"} className={styles.page}>
                <h1>Page</h1>
            </div>
        </div>
    );
};

export default Page;
