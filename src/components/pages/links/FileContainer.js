import React, { useState } from "react";
//import axios from "axios";
import './FileContainer.css';


/* UPLOAD THIS INTO THE POSTGRESQL DATABASE 
  
*/ 


const Citations = (props) => {
  
    const [file, setFile] = useState()
    const [fileDataToJSON, setFileDataToJSON] = useState()

    //let [fileTitle, setFileTitle] = useState("Untitled");
    /*
    let [fileContent, setFileContent] = useState("There are no citations added. Please upload or create a citation.");
*/

    function fileParser(file) { 
      //we need to parse it 
      //it needs to read book, website or other, 
      //etc
      JSON.stringify(file)
    }

    function convertToJson(data) { 
      //turn into JSON
    }

    function handleChange(e) {
        setFile(e.target.files[0])        
    }

    function handleFileSubmit(e) {
        if (!file) { 
            e.preventDefault()
            console.log("No file selected.");
            return; 
        }
        e.preventDefault()

        /* Use fileParser, put into database */
        console.log(file)

        const data = fileParser(file)
        console.log(data)

    } 

    function handleBack() {
        props.onBack(); // Call the onBack function passed from the parent component
    }

    return (
        <div className="file-popup">
            <h2 className="file-title">Upload a Citation</h2>

            {!file && <p>There are no citations added. Please upload or create a citation.</p>}
            
            <input onChange={handleChange} type="file"/>

            {file && (
              <section>
                File details:
                <ul>
                  <li>Name: {file.name}</li>
                  <li>Type: {file.type}</li>
                  <li>Size: {file.size} bytes</li>
                </ul>
              </section>
            )}

            <form onSubmit={handleFileSubmit}>
                <button type="submit">Upload Citation</button>
                <button onClick={handleBack} className="back-button">Back</button> 
            </form>
        </div>
    );
}

export default Citations;
