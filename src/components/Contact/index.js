import React from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const submitHandler = () => {
    Swal.fire({
      icon: "success",
      text: "Your message was sent to Mr. Marquez",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="contact-title">
            <div className="pt-4"></div>
            <h1
              className="wow bounceIn text-uppercase title-h1 pt-5 text-center"
              data-wow-delay="1s"
            >
              Quick Message
            </h1>
            <div
              className="wow flipInX card mx-auto col-md-6 col-sm-12 contact-area"
              data-wow-delay="2s"
            >
              <div className="form-group">
                <label htmlFor="companyname"> Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  className="form-control"
                  placeholder="(optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullname"> Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="(optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                  placeholder="sample@gmail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message"> Message</label>
                <textarea
                  className="form-control"
                  cols="5"
                  rows="5"
                  name="message"
                  placeholder="Sample message here...."
                  required
                ></textarea>
              </div>
            </div>
            <div className=" text-center">
              <button
                className="wow jackInTheBox btn btn-outline-primary mt-2"
                data-wow-delay="2s"
                onClick={submitHandler}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
