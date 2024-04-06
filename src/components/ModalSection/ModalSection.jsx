import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import CartEmpty from "../CartEmpty/CartEmpty";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setorderDetails] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    towncity: "",
    statecountry: "",
    postcode: "",
    phone: "",
    email: "",
  });
  //handlechange
  const handleChange = (e) => {
    setorderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    console.log(orderDetails);
  };
  //Submit Order
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !orderDetails.firstname ||
      !orderDetails.lastname ||
      !orderDetails.streetaddress ||
      !orderDetails.towncity ||
      !orderDetails.statecountry ||
      !orderDetails.postcode ||
      !orderDetails.phone ||
      !orderDetails.email
    ) {
      return toast.error("All fields are required!");
    } else {
      toast.success("Order Successfully");
      setorderDetails({
        firstname: "",
        lastname: "",
        streetaddress: "",
        towncity: "",
        statecountry: "",
        postcode: "",
        phone: "",
        email: "",
      });
      onCloseModal();
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <section>
      <Button
        className="w-full text-center bg-indigo-600 rounded-full py-3 px-4 font-semibold text-lg  text-white transition-all duration-500 hover:bg-indigo-700"
        onClick={() => setOpenModal(true)}
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div>
            <h3 class="text-lg font-semibold mb-5">Billing Details</h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
              <div>
                <div>
                  <label class="mb-3 inline-block">First Name</label>
                  <input
                    name="firstname"
                    onChange={handleChange}
                    value={orderDetails.firstname}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label class="mb-3 inline-block">Last Name</label>
                  <input
                    name="lastname"
                    onChange={handleChange}
                    value={orderDetails.lastname}
                    class="border rounded-lg border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="text"
                  />
                </div>
              </div>

              <div class="lg:col-span-2">
                <div>
                  <label class="mb-3 inline-block">Street Address</label>
                  <input
                    name="streetaddress"
                    onChange={handleChange}
                    value={orderDetails.streetaddress}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    placeholder="House number and street name"
                    type="text"
                  />
                </div>
              </div>
              <div class="lg:col-span-2">
                <div>
                  <label class="mb-3 inline-block">Town / City</label>
                  <input
                    name="towncity"
                    onChange={handleChange}
                    value={orderDetails.towncity}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label class="mb-3 inline-block">State / County</label>
                  <input
                    name="statecountry"
                    onChange={handleChange}
                    value={orderDetails.statecountry}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label class="mb-3 inline-block">Postcode / ZIP</label>
                  <input
                    name="postcode"
                    onChange={handleChange}
                    value={orderDetails.postcode}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label class="mb-3 inline-block">Phone</label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    value={orderDetails.phone}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label class="mb-3 inline-block">Email Address</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={orderDetails.email}
                    class="border border-solid rounded-lg border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <span className="w-full text-center inline-block   bg-indigo-600 rounded-full py-3 px-4 font-semibold text-lg  text-white transition-all duration-500 hover:bg-indigo-700">
              <button onClick={handleSubmitForm}>Order Now</button>
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ModalSection;
