import React, { useState } from "react";
import { db } from "../../../FirebaseAuth/FirebaseAuth";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
const Contact = () => {
  const [userContact, setuserContact] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handelContact = (e) => {
    setuserContact({ ...userContact, [e.target.name]: e.target.value });
  };
  //signup submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!userContact.email || !userContact.subject || !userContact.message) {
      return toast.error("All fields are required!");
    } else {
      addDoc(collection(db, "contacts"), {
        email: userContact.email,
        subject: userContact.subject,
        message: userContact.message,
      })
        .then(() => {
          toast.success("Message Sent Successfully");
          setuserContact({
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div>
      <section id="contact" class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Become a Seller? Want to send email your details? Need details about
            our Business plan? Let us know.
          </p>
          <section class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={handelContact}
                value={userContact.email}
                autoComplete="off"
                type="email"
                name="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                onChange={handelContact}
                value={userContact.subject}
                autoComplete="off"
                type="text"
                name="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                onChange={handelContact}
                value={userContact.message}
                autoComplete="off"
                rows="6"
                name="message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              onClick={handleContactSubmit}
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
