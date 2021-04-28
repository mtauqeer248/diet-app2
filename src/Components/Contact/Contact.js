import React from 'react'
import './Contact.css';
import emailjs from 'emailjs-com';



function ContactSection() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0n36gn5', 'template_d22swlg', e.target, 'user_3RAk7ZrJLGzglT4LlZ1hj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <>
          <div className="container">
	<div className="row">
			<h1>contact us</h1>
	</div>
	<div className="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>

        </>
    )
}

export default ContactSection
