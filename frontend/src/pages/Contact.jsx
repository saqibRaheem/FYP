import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import TextField from "../components/TextField/TextField";
import Header from "../components/Header/Header";
import { Form, Formik } from "formik";
import FormSlider from "../components/FormSlider/FormSlider";
import Button from "../components/Buttons/Button";
import Textfield from "../components/TextArea/TextArea";
import "./Pages.scss";
import Footer from "../components/Footer/Footer";
import { contactUs } from "../Lib/User.helper";
const Contact = () => {
  const [loading, setLoading] = useState("");

  return (
    <div className="contact">
      <Header />
      <FormSlider text="Contact" />
      <Container>
        <h3 className="heading">Contact Us</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values,{resetForm}) => {
            const { email, name, message } = values;
            contactUs(email, name, message,setLoading,resetForm);
          }}
        >
          <Form>
            <div className="form">
              <TextField name="name" type="text" placeholder="Name" required />
              <br />
              <TextField
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <br />
              <Textfield
                label="Message"
                name="message"
                type="text"
                placeholder="Enter Your Message"
                required
              />
              <div className="form-btn">
                <Button
                  text="Submit"
                  fullwidth
                  type="submit"
                  loading={loading}
                />
              </div>
            </div>
          </Form>
        </Formik>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.989152691038!2d67.0735236!3d24.8724793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4959c12b7475284!2sDadabhoy%20Institute%20of%20Higher%20Education%20-%20Main%20Campus!5e0!3m2!1sen!2s!4v1640967356823!5m2!1sen!2s"
          width="100%"
          height="450"
          className="map"
          loading="lazy"
        ></iframe>
      </Container>
      <Footer />
    </div>
  );
};
export default Contact;
