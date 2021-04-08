import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.mobile}, Here is what i want to say ${data.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="John Doe"
                />
                <label for="exampleInputEmail1">Mobile Number</label>
                <input
                  type="number"
                  class="form-control"
                  name="mobile"
                  value={data.mobile}
                  onChange={InputEvent}
                  placeholder="XXXXXXXXXX"
                />
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1">Message</label>
                <textarea
                  class="form-control"
                  row="10"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Enter your Message..."
                ></textarea>
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
