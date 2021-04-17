import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="section-header text-center text-white mb-5">
                <h1 className="customFont">Connect with us</h1>
                <hr style={{ borderTop: '2px dashed red' }} />
                <div className="col-md-9 mx-auto w-50 col-sm-w-75 mt-4">
                    <form action="mailto:kbutsho@gmail.com" method="post" enctype="text/plain">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" value="Send" className="btn btn-primary mx-3" />
                            <input type="reset" className="btn btn-danger mx-3 my-3" value="Reset" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;