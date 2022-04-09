import React from 'react';
import styles from './Results.module.scss'

const Results = () => {
    return (
        <div className={styles.bg}>
          <div className={styles.resultBox}>
              <h1>RESULT</h1>
              <div className={styles.containerTxt}>
                  <h2>YOUR ENTRY IS: </h2>
                  <label className={styles.resultVerdictTxt}>VERDICT</label>
              </div>
              <div className={styles.line}></div>
              <h2>RECOGNITION PARAMETERS: </h2>
              <div className={styles.containerItems}>
                  <div className={styles.containerItemsSecond}>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                  </div>
                  <div className={styles.containerItemsSecond}>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                      <label className={styles.listedItems}>PARAMETER NR 1</label>
                  </div>
              </div>
              <div className={styles.containerButtons}>
              <button className={styles.buttonSecondary}>BACK</button>
                <div className={styles.containerButtonsSecondary}>
                    <button className={styles.buttonSecondary}>
                        <div className={styles.share}></div>SHARE</button>
                    <button className={styles.buttonPrimary}>DETAILS</button>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Results;