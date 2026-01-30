import React, { useState } from 'react'
import QRCode from "react-qr-code";
import "./style.css"

function QRcode() {

    const [QRValue , setQRValue] = useState("Hello");
    const [value , setValue] = useState("");

    function handleGenerate(QRvalue) {
        setQRValue(QRvalue);
    }

  return (
    <div className='container'>
      <h2>Generate QR Code</h2>
      <div className='QRCodeInput'>
        <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='Enter Value'/>
        <button onClick={() => handleGenerate(value)}>Generate</button>
      </div>
      <QRCode value={QRValue} />
    </div>
  )
}

export default QRcode
