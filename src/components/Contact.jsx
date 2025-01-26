import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com"; // Import EmailJS
import Map from "../additional datas/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    // Check if all fields are empty
    if (
      !trimmedData.name &&
      !trimmedData.email &&
      !trimmedData.phone &&
      !trimmedData.subject &&
      !trimmedData.message
    ) {
      toast.error("All credentials cannot be empty!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    // Check individual empty fields
    let errors = [];
    if (!trimmedData.name) errors.push("Name is required!");
    if (!trimmedData.email) errors.push("Email is required!");
    if (!/\S+@\S+\.\S+/.test(trimmedData.email))
      errors.push("Please enter a valid email address!");
    if (!trimmedData.phone) errors.push("Phone number is required!");
    if (!trimmedData.subject) errors.push("Subject is required!");
    if (!trimmedData.message) errors.push("Message is required!");

    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_qj5jxkt", //service ID
        "template_v1i7nid", //template ID
        trimmedData, // The form data to send
        "CX1Q22xUNMwiSSuFO" //public key
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          console.log("Email sent successfully", response);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          console.error("Error sending email", error);
        }
      );
  };

  return (
    <div>
      <div className="m-1 bg-white rounded-md px-2 py-2">
        <h1 className="flex justify-center text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">
          Contact Me
        </h1>
        <ToastContainer />
        <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl shadow-xl flex flex-col lg:flex-row justify-between gap-6 animate-fade-in">
          {/* description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl text-green-900 font-extrabold mb-6 text-center drop-shadow-lg">
              Let's Connect!
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg text-justify">
              Feel free to reach out for any inquiries, collaborations, or just
              to say hello!
            </p>
            <div className="mt-8 text-gray-900 space-y-3 text-lg">
              <p>
                📧 Email:
                <a
                  href="mailto:chaudharyprakash023pc@gmail.com"
                  className="text-blue-600 underline hover:text-blue-800 break-all"
                >
                  chaudharyprakash023pc@gmail.com
                </a>
              </p>
              <p>
                📱 Phone:
                <a
                  href="tel:+9766667409"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  9766667409
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Location: Tikapur, Nepal
              </p>
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 bg-white px-14 py-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl lg:text-3xl text-green-900 font-semibold mb-4 text-center drop-shadow-lg">
              Leave a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-1 md:p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 shadow-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 md:p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-1 md:p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 shadow-sm"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-1 md:p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 shadow-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-1 md:p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 h-40 shadow-sm"
              ></textarea>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-auto bg-red-700 text-white p-2 rounded-lg shadow-md hover:bg-green-800 transition"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
};

export default Contact;
