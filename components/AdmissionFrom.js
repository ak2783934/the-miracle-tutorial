import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../pages/api/index";

const AdmisssionFrom = () => {
  const [submitted, setSubmmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      mothersName: "",
      fathersName: "",
      classs: "",
      board: "",
      prevMarks: "",
      school: "",
      contact: "",
      fathersContact: "",
      emailId: "",
      address: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      birthDate: Yup.date().required("Required"),
      gender: Yup.string().required("Required"),
      mothersName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      fathersName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      classs: Yup.number().required("Required"),
      board: Yup.string("board should be a string").required("requried"),
      prevMarks: Yup.number().required("Required"),
      school: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      contact: Yup.string()
        .max(10, "should have 10 characters")
        .min(10, "min 10 characters are required")
        .required("Required"),
      fathersContact: Yup.string()
        .max(10, "should have 10 characters")
        .min(10, "min 10 characters are required")
        .required("Required"),
      emailId: Yup.string().email("Invalid email Id").required("Required"),
      address: Yup.string().required("Required"),
      photo: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      var formDate = new FormData();
      formDate.append("name", values.firstName + " " + values.lastName);
      formDate.append("birthDate", values.birthDate);
      formDate.append("gender", values.gender);
      formDate.append("mothersName", values.mothersName);
      formDate.append("fathersName", values.fathersName);
      formDate.append("classs", values.classs);
      formDate.append("board", values.board);
      formDate.append("prevMarks", values.prevMarks);
      formDate.append("school", values.school);
      formDate.append("contact", values.contact);
      formDate.append("fathersContact", values.fathersContact);
      formDate.append("emailId", values.emailId);
      formDate.append("address", values.address);
      formDate.append("photo", values.photo);

      await api
        .post("/admission", formDate, { "Content-Type": "multipart/form-data" })
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
    <form className="grid grid-cols-1 gap-4" onSubmit={formik.handleSubmit}>
      <div>
        <div className="text-lg font-medium sm:text-xl">Name</div>
        <div className="grid grid-cols-2 gap-8 py-2">
          <input
            className="h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="First name"
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <input
            className="h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Last name"
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">Birth Date</div>
          <input
            type="date"
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="DOB"
            id="birthDate"
            name="birthDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div>{formik.errors.birthDate}</div>
          ) : null}
        </div>
        <div className="">
          <div className="pb-2 text-lg font-medium sm:text-xl">Gender</div>
          <div className="grid grid-cols-3 sm:py-2">
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="male" className="pr-3 text-sm sm:text-lg">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-4 h-4 my-auto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="female" className="pr-3 text-sm sm:text-lg">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-4 h-4 my-auto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="others" className="pr-3 text-sm sm:text-lg">
                Others
              </label>
              <input
                type="radio"
                name="gender"
                value="others"
                className="w-4 h-4 my-auto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            Mother's Name
          </div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Mother's name"
            type="text"
            id="mothersName"
            name="mothersName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mothersName}
          />
          {formik.touched.mothersName && formik.errors.mothersName ? (
            <div>{formik.errors.mothersName}</div>
          ) : null}
        </div>
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            Father's Name
          </div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Father's name"
            type="text"
            id="fathersName"
            name="fathersName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fathersName}
          />
          {formik.touched.fathersName && formik.errors.fathersName ? (
            <div>{formik.errors.fathersName}</div>
          ) : null}
        </div>
      </div>

      <div>
        <div className="pb-2 text-lg font-medium sm:text-xl">
          Name of the school
        </div>
        <input
          className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
          placeholder="Name of the school"
          type="text"
          id="school"
          name="school"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.school}
        />
        {formik.touched.school && formik.errors.school ? (
          <div>{formik.errors.school}</div>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">Class</div>

          <select
            name="classs"
            id="classs"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.classs}
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
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
        </div>
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            School board
          </div>
          <select
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
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
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            Previous Class Percentage/CGPA
          </div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Marks"
            type="number"
            name="prevMarks"
            id="prevMarks"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prevMarks}
          />
          {formik.touched.prevMarks && formik.errors.prevMarks ? (
            <div>{formik.errors.prevMarks}</div>
          ) : null}
        </div>
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">Contact No.</div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Contact No."
            type="number"
            id="contact"
            name="contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div>{formik.errors.contact}</div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            Father’s Contact No.
          </div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Father's contact no."
            type="number"
            id="fathersContact"
            name="fathersContact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fathersContact}
          />
          {formik.touched.fathersContact && formik.errors.fathersContact ? (
            <div>{formik.errors.fathersContact}</div>
          ) : null}
        </div>
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">E-mail Id</div>
          <input
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
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
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">Address</div>
          <textarea
            className="w-full h-20 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Enter your address"
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}
        </div>
        <div>
          <div className="pb-2 text-lg font-medium sm:text-xl">
            Student’s Photo
          </div>
          <input
            type="file"
            className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
            placeholder="Student photo"
            id="photo"
            name="photo"
            onChange={(event) => {
              const file = event.target.files;
              let myFiles = Array.from(file);
              formik.setFieldValue("photo", myFiles[0]);
              console.log(myFiles);
            }}
            onBlur={formik.handleBlur}
            accept="image/png, image/jpeg, image/jpg"
          />
          {formik.touched.photo && formik.errors.photo ? (
            <div>{formik.errors.photo}</div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="w-1/2 h-8 mx-auto my-5 mt-10 text-sm font-bold bg-green-400 sm:text-lg sm:h-12 sm:w-1/3 rounded-xl hover:bg-green-600"
      >
        Proceed to payment
      </button>
      {submitted && (
        <div className="text-sm text-center text-green-700">
          We will contact you soon!
        </div>
      )}
    </form>
  );
};
export default AdmisssionFrom;
