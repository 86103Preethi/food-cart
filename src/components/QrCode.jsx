import React, { useState } from 'react';

const QrCode = () => {
  const [img, setImg] = useState("");
  const [data, setData] = useState("https://tutorjoes.in");
  const [size, setSize] = useState("500x150");
  const [loading, setLoading] = useState(false);


  const handleGenerator = () => {
    if (data) {
      setLoading(true);
      // Construct the API URL for generating the QR code
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${data}`;
      setImg(qrCodeUrl);
      setLoading(false);
    } else {
      alert("Please enter data for the QR code");
    }
  }

  const downloadQR = () => {
    // window.open(img);
    fetch(img)
    .then((response) => response.blob())               //blob- converts response into binary format data.
    .then((blob) => {
         console.log("res",blob); 
         const link = document.createElement('a')      //creating a anchor tag
         console.log("link",link);
         link.href = URL.createObjectURL(blob);
         console.log("href",link.href);
         link.download = 'qrcode';
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
    }).catch((error) => {
      console.log("err",error);
    })   


  }

  return (
    <div className='app-container'>
  
      {loading ? <p>Please wait.....</p> : img && <img src={img} alt='QR Code' className='qrcode-image' />}
      
      <div>
        <label htmlFor='dataInput' className=''>Data for the QR Code</label>
        <input
          id='dataInput'
          type='text'
          placeholder='Enter your data'
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='sizeInput' className=''>Image Size (e.g., 150x150)</label>
        <input
          id='sizeInput'
          type='text'
          placeholder='Enter size'
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <div>
        <button className='generate' onClick={handleGenerator} disabled={loading}>Generate QR Code</button>
        {img ? <button className='download' onClick={() => downloadQR()} >Download QR Code</button> : null}
      </div>
      
    </div>
  )
}

export default QrCode;

