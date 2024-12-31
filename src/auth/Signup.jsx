import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  institutionId: Yup.string().required("Institution ID is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  role: Yup.string()
    .oneOf(
      ["ADMIN", "SUPERADMIN", "STUDENT", "TEACHER", "ACCOUNTANT", "PARENT"],
      "Invalid role"
    )
    .required("Role is required"),
  pAddress: Yup.string().required("Permanent address is required"),
  tAddress: Yup.string().required("Temporary address is required"),
  phone: Yup.number().required("Phone number is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string()
    .oneOf(["MALE", "FEMALE", "OTHER"], "Invalid gender")
    .required("Gender is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  religion: Yup.string().required("Religion is required"),
  motherTongue: Yup.string().required("Mother tongue is required"),
  admissionNo: Yup.string().required("Admission number is required"),
  regdNo: Yup.string().required("Registration number is required"),
  academicYear: Yup.string().required("Academic year is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  expectedPassoutDate: Yup.date().required("Expected passout date is required"),
  studentType: Yup.string()
    .oneOf(["NEW", "OLD"], "Invalid student type")
    .required("Student type is required"),
  rollNo: Yup.string().required("Roll number is required"),
  libraryId: Yup.string().required("Library ID is required"),
  panNo: Yup.string().required("PAN number is required"),
  staffId: Yup.string().required("Staff ID is required"),
  staffType: Yup.string()
    .oneOf(["Full-Time", "Part-Time"], "Invalid staff type")
    .required("Staff type is required"),
  citizenshipId: Yup.string().required("Citizenship ID is required"),
  designation: Yup.string().required("Designation is required"),
  payrollType: Yup.string()
    .oneOf(["Permanent", "Contract"], "Invalid payroll type")
    .required("Payroll type is required"),
});

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZhNGExMTZiYjk3NWQzZWU3ZTZhNiIsImVtYWlsIjoiYWRtaW5AY29uc3VsdGFuY3kuY29tIiwiaWF0IjoxNjgxODk3Mzc0fQ.vEhxinEnJD4vRUrMC_eRjbLKWpRCCXo5HXcKeVbe6gM";
  return (
    <Formik
      initialValues={{
        institutionId: "",
        name: "",
        email: "",
        password: "",
        role: "",
        pAddress: "",
        tAddress: "",
        phone: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        religion: "",
        motherTongue: "",
        admissionNo: "",
        regdNo: "",
        academicYear: "",
        joiningDate: "",
        expectedPassoutDate: "",
        studentType: "",
        rollNo: "",
        libraryId: "",
        panNo: "",
        staffId: "",
        staffType: "",
        citizenshipId: "",
        designation: "",
        payrollType: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        setIsLoading(true);
        setErrorMessage("");
        console.log(values);
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
          navigate("/login");
        } catch (error) {
          console.error("Error:", error);
          setErrorMessage("Something went wrong. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
          <h1 className="font-bold text-2xl mb-4 text-center">
            CTEVT Signup Form
          </h1>

          {/* Display error message */}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <div className="flex justify-between items-center gap-2 mb-4 ">
            <div className="w-full">
              <Field
                name="institutionId"
                placeholder="Institution ID"
                className="w-full p-2 border rounded"
              />
              {errors.institutionId && touched.institutionId && (
                <div className="text-red-500 text-sm">
                  {errors.institutionId}
                </div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="name"
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className=" w-full">
              <Field
                name="role"
                as="select"
                className="w-full p-2 border rounded"
              >
                <option value="">Select Role</option>
                <option value="ADMIN">ADMIN</option>
                <option value="SUPERADMIN">SUPERADMIN</option>
                <option value="STUDENT">STUDENT</option>
                <option value="TEACHER">TEACHER</option>
                <option value="ACCOUNTANT">ACCOUNTANT</option>
                <option value="PARENT">PARENT</option>
              </Field>
              {errors.role && touched.role && (
                <div className="text-red-500 text-sm">{errors.role}</div>
              )}
            </div>

            <div className=" w-full">
              <Field
                name="pAddress"
                placeholder="Permanent Address"
                className="w-full p-2 border rounded"
              />
              {errors.pAddress && touched.pAddress && (
                <div className="text-red-500 text-sm">{errors.pAddress}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="w-full">
              <Field
                name="tAddress"
                placeholder="Temporary Address"
                className="w-full p-2 border rounded"
              />
              {errors.tAddress && touched.tAddress && (
                <div className="text-red-500 text-sm">{errors.tAddress}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="phone"
                placeholder="Phone"
                className="w-full p-2 border rounded"
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="flex items-center mb-4 justify-between gap-2">
            <div className="w-full">
              <Field
                name="dob"
                type="date"
                className="w-full p-2 border rounded"
              />
              {errors.dob && touched.dob && (
                <div className="text-red-500 text-sm">{errors.dob}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="gender"
                as="select"
                className="w-full p-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
              </Field>
              {errors.gender && touched.gender && (
                <div className="text-red-500 text-sm">{errors.gender}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="bloodGroup"
                placeholder="Blood Group"
                className="w-full p-2 border rounded"
              />
              {errors.bloodGroup && touched.bloodGroup && (
                <div className="text-red-500 text-sm">{errors.bloodGroup}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="religion"
                placeholder="Religion"
                className="w-full p-2 border rounded"
              />
              {errors.religion && touched.religion && (
                <div className="text-red-500 text-sm">{errors.religion}</div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="motherTongue"
                placeholder="Mother Tongue"
                className="w-full p-2 border rounded"
              />
              {errors.motherTongue && touched.motherTongue && (
                <div className="text-red-500 text-sm">
                  {errors.motherTongue}
                </div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="admissionNo"
                placeholder="Admission Number"
                className="w-full p-2 border rounded"
              />
              {errors.admissionNo && touched.admissionNo && (
                <div className="text-red-500 text-sm">{errors.admissionNo}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="regdNo"
                placeholder="Registration Number"
                className="w-full p-2 border rounded"
              />
              {errors.regdNo && touched.regdNo && (
                <div className="text-red-500 text-sm">{errors.regdNo}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="academicYear"
                placeholder="Academic Year"
                className="w-full p-2 border rounded"
              />
              {errors.academicYear && touched.academicYear && (
                <div className="text-red-500 text-sm">
                  {errors.academicYear}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <label htmlFor="" className="text-gray-400 mb-1 mx-1">
                Joining date
              </label>

              <Field
                name="joiningDate"
                type="date"
                className="w-full p-2 border rounded"
              />
              {errors.joiningDate && touched.joiningDate && (
                <div className="text-red-500 text-sm">{errors.joiningDate}</div>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="" className="text-gray-400 mb-1 mx-1">
                Expected Passout Date
              </label>
              <Field
                name="expectedPassoutDate"
                type="date"
                className="w-full p-2 border rounded"
              />
              {errors.expectedPassoutDate && touched.expectedPassoutDate && (
                <div className="text-red-500 text-sm">
                  {errors.expectedPassoutDate}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="studentType"
                as="select"
                className="w-full p-2 border rounded"
              >
                <option value="">Select Student Type</option>
                <option value="NEW">NEW</option>
                <option value="OLD">OLD</option>
              </Field>
              {errors.studentType && touched.studentType && (
                <div className="text-red-500 text-sm">{errors.studentType}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="rollNo"
                placeholder="Roll Number"
                className="w-full p-2 border rounded"
              />
              {errors.rollNo && touched.rollNo && (
                <div className="text-red-500 text-sm">{errors.rollNo}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="w-full">
              <Field
                name="libraryId"
                placeholder="Library ID"
                className="w-full p-2 border rounded"
              />
              {errors.libraryId && touched.libraryId && (
                <div className="text-red-500 text-sm">{errors.libraryId}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="panNo"
                placeholder="PAN Number"
                className="w-full p-2 border rounded"
              />
              {errors.panNo && touched.panNo && (
                <div className="text-red-500 text-sm">{errors.panNo}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="staffId"
                placeholder="Staff ID"
                className="w-full p-2 border rounded"
              />
              {errors.staffId && touched.staffId && (
                <div className="text-red-500 text-sm">{errors.staffId}</div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="staffType"
                as="select"
                className="w-full p-2 border rounded"
              >
                <option value="">Select Staff Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
              </Field>
              {errors.staffType && touched.staffType && (
                <div className="text-red-500 text-sm">{errors.staffType}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-full">
              <Field
                name="citizenshipId"
                placeholder="Citizenship ID"
                className="w-full p-2 border rounded"
              />
              {errors.citizenshipId && touched.citizenshipId && (
                <div className="text-red-500 text-sm">
                  {errors.citizenshipId}
                </div>
              )}
            </div>

            <div className="w-full">
              <Field
                name="designation"
                placeholder="Designation"
                className="w-full p-2 border rounded"
              />
              {errors.designation && touched.designation && (
                <div className="text-red-500 text-sm">{errors.designation}</div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <Field
              name="payrollType"
              as="select"
              className="w-full p-2 border rounded"
            >
              <option value="">Select Payroll Type</option>
              <option value="Permanent">Permanent</option>
              <option value="Contract">Contract</option>
            </Field>
            {errors.payrollType && touched.payrollType && (
              <div className="text-red-500 text-sm">{errors.payrollType}</div>
            )}
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
