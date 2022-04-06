
//link to video tutorial
//https://youtu.be/7qyjYeF0074



import React, {useState} from 'react';

const Contact = () => {
    
    //connecting backend with front end web page
    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });


    //handle inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });
    }


    //handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Message not sent, Try again later...");
            }else {
                window.alert("Message sent successfully!!");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            console.log(error);
        } 
    }
    
    return (
        <div>
            <section id="contact" id="contentbox">
                <div className="container">
                    <div className="row">
                        <div className="col-12-md-8 mt-5">
                            <h1 className="display-6  text-center mb-4"><b>C</b>ontact <b>U</b>s</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <img src="/assets/contact.png" alt="Contact Us" className="w-100" />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3 background-transparent">
                                    <label for="name" class="form-label">Enter Your Name</label>
                                    <input type="text" class="form-control rounded-pill" id="name" placeholder="John Smith" name="name" value={msg.name} onChange={handleChange} required/>

                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Enter Your Email</label>
                                    <input type="email" class="form-control rounded-pill" id="email" placeholder="name@example.com" name="email" value={msg.email} onChange={handleChange} required/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Type Your Message</label>
                                    <textarea class="form-control" id="msgbox" name="message" value={msg.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type='submit' className="btn" id="btn">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                                {/* btn btn-outline-primary rounded-pill text-white border-black */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Contact;
