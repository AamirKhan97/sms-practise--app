import React, { useState } from "react";

let Home = (props) => {

    let [sms, setSms] = useState('');
    // let [upperCase , setUpperCase] = useState(false)
    // Give value to text area

    let handleSms = (e) => {
        setSms(e.target.value)
    }
    // To select all text
    let selectAll = () => {
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      text.selectionRange(0,sms.length);
        navigator.clipboard.writeText(text.value)
    }
    // toUpperCase
    let toUpperCase = () => {
       let text = sms.toUpperCase()
      setSms(text)
    }
    // toBold
    let toBold = () => {
        // let text = document.querySelector('textarea').innerText;
        // text.st

        setSms()
    }
    // clearAll
    let clearAll = () => {
        setSms("")
    }
    //toLowerCase
    let toLowerCase = () => {
        let text = sms.toLowerCase();
        setSms(text)
    }
    
    return (
        <React.Fragment>
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col bg-light text-info p-3">
                        <h3>SMS APPLICATION</h3>
                        <div className="mb-3">
                            <textarea 
                                value={sms}
                                onChange={handleSms}
                            className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>
                </div>
                <div className="container my-3 text-center">
                    <div className="row">
                        <div className="col-md-2">
                            <button onClick={selectAll} className="btn btn-primary btn-sm">Select All Text</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={toUpperCase} className="btn btn-danger btn-sm">Upper Case</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={toBold} className="btn btn-secondary btn-sm">BOLD</button>
                        </div>
                        <div className="col-md-2">
                            <button  className="btn btn-info btn-sm" style={{fontStyle:"italic"}}>Italic</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={toLowerCase}  className="btn btn-warning btn-sm">Lower Case</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={clearAll} className="btn btn-dark btn-sm">Delete All</button>
                        </div>
                        
                    </div>
                </div>

                <div className="container my-3">
                    <div className="row">
                        <div className="col">
                                <h1 className="text-info">Words Counter</h1>
                               <div className={`${props.clicked ? "text-white" : "text-dark"}`}>
                               <h5>Total Words : {sms.length}</h5>
                                <h5>Font Style : </h5>
                                <h5>Total Words :</h5>
                               </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Home