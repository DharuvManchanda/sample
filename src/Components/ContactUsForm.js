import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import conatctImage from './Assets/feature-2.png'
export const ContactUs = () => {
    const [success,setSuccess]=useState(false);
    const [setForm,setFormData]=useState({from_name:"",from_email:"",message:""});
    function changeHandle(event){
            setFormData(prevData=>{
                return {
                    ...prevData,
                    [event.target.name]:event.target.value
                }
            })
            console.log(setForm);
        }
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_om0sahm', 'template_mp2ahx2', form.current, {
        publicKey: 'KjQ-oC8LFvSz_wg_p',
      })
      .then(
        () => {
          setSuccess(true);
          setFormData({from_name:"",from_email:"",message:""});
          setTimeout(() => {
            setSuccess(false)
          }, 6000);
        },
        (error) => {
setSuccess(false);
console.log(error);
        },
      );
  };

  return (
<div className='container wrapContact'>
<img src={conatctImage} alt="" />
<form ref={form} onSubmit={sendEmail}>
<h2>{success ? 'Message Sent Successfully' :'Drop Your Message'}</h2>
<div className="inputName">
<input type="text" name="from_name" placeholder='Your Name' id='nameArea' value={setForm.from_name} onChange={changeHandle} required />
</div>
<div className="inputName">
<input type="email" name="from_email" placeholder='Your Email' id='emailArea' value={setForm.from_email} onChange={changeHandle} required/>
</div>
<div className="inputName">
<textarea name="message" id="textArea" rows={6} placeholder="Write your message" value={setForm.message} onChange={changeHandle} required/>
</div>   
      <input type="submit" value="Send" className='secondary-btn btn'/>
    </form>
</div>
  );
};
