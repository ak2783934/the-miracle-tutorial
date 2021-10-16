import React from "react";
import Layout from "../layout";

export default function Admission() {
  return (
    <Layout>
      <hr />
      <div className="py-2 text-xl font-bold text-center sm:text-2xl">
        Admission Form
      </div>
      <div className="pb-2 text-sm text-center sm:text-lg">
        Enter your admission information below
      </div>
      <hr />
      <div className="px-10 py-10 sm:px-32">
        <form className="grid grid-cols-1 gap-4">
          <div>
            <div className="text-lg font-medium sm:text-xl">Name</div>
            <div className="grid grid-cols-2 gap-8 py-2">
              <input
                className="h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="First name"
                type="text"
              />
              <input
                className="h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Last name"
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                Birth Date
              </div>
              <input
                type="date"
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="DOB"
              />
            </div>
            <div className="">
              <div className="pb-2 text-lg font-medium sm:text-xl">Gender</div>
              <div className="grid grid-cols-3 sm:py-2">
                <div>
                  <label for="male" className="pr-3 text-sm sm:text-lg">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="w-4 h-4"
                  />
                </div>
                <div>
                  <label for="female" className="pr-3 text-sm sm:text-lg">
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="w-4 h-4"
                  />
                </div>
                <div>
                  <label for="others" className="pr-3 text-sm sm:text-lg">
                    Others
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="others"
                    className="w-4 h-4"
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
              />
            </div>
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                Father's Name
              </div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Father's name"
                type="text"
              />
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
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">Class</div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Class"
                type="number"
              />
            </div>
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                School board
              </div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="School board"
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                Previous Class Percentage/CGPA
              </div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder=""
                type="text"
              />
            </div>
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                Contact No.
              </div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Contact No."
                type="number"
              />
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
              />
            </div>
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                E-mail Id
              </div>
              <input
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">Address</div>
              <textarea
                className="w-full h-20 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Enter your address"
                type="text"
              />
            </div>
            <div>
              <div className="pb-2 text-lg font-medium sm:text-xl">
                Student’s Photo
              </div>
              <input
                type="file"
                className="w-full h-10 px-2 text-sm tracking-wide text-gray-500 border-2 rounded-md sm:text-lg"
                placeholder="Student photo"
                id="studentphoto"
                name="studentphoto"
                accept="image/png, image/jpeg"
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 h-8 mx-auto my-5 mt-10 text-sm font-bold bg-green-400 sm:text-lg sm:h-12 sm:w-1/3 rounded-xl"
          >
            Proceed to payment
          </button>
        </form>
      </div>
    </Layout>
  );
}
