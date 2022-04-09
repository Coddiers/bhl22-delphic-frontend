import React, {useState} from 'react';
import styles from "./UserApp.module.scss";
import axios from "axios";
import Results from "../results/Results";
import Loading from "../loading/Loading"
import {useNavigate} from "react-router-dom";

function VideoInput(onCheck) {
    const [ file, setFile ] = useState();
    const [ img , setImg ] = useState("");
    const [ checkId, setCheckId ] = useState("");
    const [ verifing, setVerifing ] = useState(false);
    const [ result, setResult ] = useState();
    const [ resultPicture, setResultPicture ] = useState();
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
    }

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(typeof event.target.files[0])
        setImg(URL.createObjectURL(event.target.files[0]));
    }

    const onFileSend = () => {
        const data = new FormData();

        data.append("file", file);

        axios.post("https://bhl22-delphic-backend.azurewebsites.net/api/picture", data)
            .then(response => {
                console.log(response.data);
                console.log(response.data.id)
                const id = response.data.id;
                setCheckId(id)
                waitForVerify(id)
            });
    }

    const waitForVerify = (id) => {
        setVerifing(true);
        console.log(id);
        axios.get(`https://bhl22-delphic-backend.azurewebsites.net/api/picture/verified/{id}?id=${id}`)
            .then(response => {
                const result = response.data;
                console.log(response.data);
                setResult(response.data)
                setVerifing(false)
                if(result.fake === true){
                    const picId = result.pictureIDs[0];
                    pullResultImage(picId)
                }else{
                    setResultPicture("no-picture")
                }
            });
    }

    const pullResultImage = (id) => {
        axios.get(`https://bhl22-delphic-backend.azurewebsites.net/api/file/${id}`, { responseType: 'arraybuffer' })
            .then(response => {
                let blob = new Blob(
                    [response.data],
                    { type: response.headers['content-type'] }
                )
                let image = URL.createObjectURL(blob)
                setResultPicture(image)
            })
    }

    return (
        <div>
            <div className={styles.boxInput}>

            <input className={styles.boxFile} type="file"  name="files[]" id="file" data-multiple-caption="{count} files selected" multiple onChange={onFileChange}/>
            <label className={styles.lblUpload} for="file">
                {!file && <h1 className={styles.textUpload}>ADD YOUR SUSPICIOUS PICTURE HERE</h1>}
                {file ? <img className={styles.uploadedImg} src={img} alt=""/> : <div className={styles.uploadImg}/>}
                </label>
            </div>

            <div className={styles.containerButtons}>
                <button className={styles.btnSecondary} onClick={refreshPage}>BACK</button>
                <button className={styles.btnPrimary} onClick={onFileSend}>CHECK</button>
            </div>
            {verifing && <Loading/>}
            {/*{result && <Results/>}*/}
            {/*{resultPicture && <img src={resultPicture} alt=""/>}*/}
            {resultPicture && <Results inputImg={img} result={result} resultPicture={resultPicture}/>}
        </div>
    );
}

export default VideoInput;
