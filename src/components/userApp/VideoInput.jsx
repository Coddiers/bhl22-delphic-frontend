import React, {useState} from 'react';
import styles from "./UserApp.module.scss";
import axios from "axios";
import Results from "../results/Results";
import Loading from "../loading/Loading"

function VideoInput(onCheck) {
    const [ file, setFile ] = useState();
    const [ img , setImg ] = useState("");
    const [ checkId, setCheckId ] = useState("");
    const [ verifing, setVerifing ] = useState(false);
    const [ result, setResult ] = useState();
    const [ resultPicture, setResultPicture ] = useState();

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
                <h1 className={styles.textUpload}>DROP YOUR VIDEO FILE HERE</h1>
                <div className={styles.uploadImg}></div>
                </label>
            </div>
            {file && <h3>Click CHECK to verify image</h3>}
            <div className={styles.containerButtons}>
                <button className={styles.btnSecondary}>BACK</button>
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
