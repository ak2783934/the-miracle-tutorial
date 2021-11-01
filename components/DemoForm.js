import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../pages/api/index";

const DemoForm = () => {
  const [submitted, setSubmmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      class: "",
      board: "",
      contact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      emailId: Yup.string().email("Invalid email address").required("Required"),
      class: Yup.number("Class should be a number").required("Required"),
      board: Yup.string("board should be a string").required("requried"),
      contact: Yup.string()
        .max(10, "Phone number have 10 characters")
        .min(10, "Phone number have 10 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await api
        .post("/demo", values)
        .then((data) => {
          console.log(data);
          console.log("Data is posted! ");
          setSubmmitted(true);
          resetForm();
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="rounded shadow-xl sm:mx-6 sm:my-10 bg-notice">
      <div className="pt-5 pb-8 text-lg font-bold text-center sm:text-xl">
        REGISTER FOR A DEMO CLASS
      </div>
      <div>
        <form
          className="grid grid-cols-1 gap-4 px-16 sm:px-36 pb-14"
          onSubmit={formik.handleSubmit}
        >
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md"
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            placeholder="Email"
            id="emailId"
            name="emailId"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailId}
          />
          {formik.touched.emailId && formik.errors.emailId ? (
            <div>{formik.errors.emailId}</div>
          ) : null}

          <select
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            name="class"
            id="class"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.class}
          >
            <option value="" selected disabled hidden>
              Select your class
            </option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            name="board"
            id="board"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.board}
          >
            <option value="" selected disabled hidden>
              Select your board
            </option>
            <option value="cbse">CBSE</option>
            <option value="chse">CHSE</option>
            <option value="bse">BSE</option>
          </select>
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            type="number"
            placeholder="Phone no."
            id="contact"
            name="contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div>{formik.errors.contact}</div>
          ) : null}
          <button
            type="submit"
            className="h-10 py-1 text-white rounded-md bg-noticeButton"
          >
            Submit
          </button>

          {submitted && (
            <div className="text-sm text-center text-green-700">
              We will contact you soon!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
