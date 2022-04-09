import React, {useEffect} from 'react';
import styles from './Results.module.scss'
import {useNavigate} from "react-router-dom";

const Results = (props) => {
const navigate = useNavigate();

    return (
        <div className={styles.bg}>
            <div className={styles.imgs}>
                
                {props.inputImg && <img src={props.resultPicture} alt=""/>}
                {props.inputImg && <img src={props.inputImg} alt=""/>}
            </div>
          <div className={styles.resultBox}>
              <h1>RESULT</h1>
              <div className={styles.containerTxt}>
                  <h2>YOUR ENTRY IS: </h2>
                  {props.result.fake === false && <label className={styles.resultVerdictTxt}>REAL</label>}
                  {props.result.fake === true && <label className={styles.resultVerdictTxt}>FAKE</label>}
              </div>
              <div className={styles.line}></div>
              <h2>RECOGNITION PARAMETERS: </h2>
              <div className={styles.containerItems}>
                  <div className={styles.containerItemsSecond}>
                      <label className={styles.listedItems}>{`Create date: ${props.result.createDate}`}</label>
                      <label className={styles.listedItems}>{`Verification date: ${props.result.verifiedDate}`}</label>

                  </div>
                  <div className={styles.containerItemsSecond}>
                  </div>
              </div>
              <div className={styles.containerButtons}>
              <button className={styles.buttonSecondary} onClick={() => navigate("/user-app")}>BACK</button>
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
