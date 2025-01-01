import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  validationSchema,
  initialValues,
  signupFormField,
} from "../model/SignupModel";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZhNGExMTZiYjk3NWQzZWU3ZTZhNiIsImVtYWlsIjoiYWRtaW5AY29uc3VsdGFuY3kuY29tIiwiaWF0IjoxNjgxODk3Mzc0fQ.vEhxinEnJD4vRUrMC_eRjbLKWpRCCXo5HXcKeVbe6gM";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://62.72.42.129:7777/api/v1/en/user/signup",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      console.log("API Response:", data);

      setIsLoading(false);
    } catch (error) {
      console.error("Signup error:", error);

      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred"
      );
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
          <h1 className="font-bold text-3xl mb-6 text-center">
            CTEVT Signup Form
          </h1>

          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {signupFormField.map((field, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.placeholder}
                </label>

                {field.enum ? (
                  <Field
                    as="select"
                    name={field.name}
                    className="w-full p-2 border rounded bg-white"
                    id={field.name}
                  >
                    <option value="" disabled>
                      Select {field.placeholder.toLowerCase()}
                    </option>
                    {Object.values(field.enum).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                ) : (
                  <Field
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-2 border rounded"
                    id={field.name}
                  />
                )}

                {errors[field.name] && touched[field.name] && (
                  <div className="text-red-500 text-sm">
                    {errors[field.name]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
