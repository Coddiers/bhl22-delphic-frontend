import React, {useEffect} from 'react';
import styles from './Results.module.scss'

const Results = (props) => {

    useEffect(() => {
        console.log(props)
    })

    return (
        <div className={styles.bg}>
            {props.inputImg && <img src={props.inputImg} alt=""/>}
            {props.inputImg && <img src={props.resultPicture} alt=""/>}
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
