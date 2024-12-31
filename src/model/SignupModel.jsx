import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Enter your name")
    .min(4, "Name should not be less than 4 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should not be less than 8 characters"),
  role: Yup.string().required("Role is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
  dob: Yup.string()
    .required("Date of birth is required")
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
      "Enter a valid date in YYYY-MM-DD format"
    ),
  paddress: Yup.string().required("Permanent address is required"),
  taddress: Yup.string().required("Temporary address is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  religion: Yup.string().required("Religion is required"),
  gender: Yup.string().required("Gender is required"),
  motherTongue: Yup.string().required("Mother tongue is required"),
  admissionNo: Yup.string().required("Admission number is required"),
  regdNo: Yup.string().required("Registration number is required"),
  academicYear: Yup.string().required("Academic year is required"),
  joiningDate: Yup.string()
    .required("Joining date is required")
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
      "Enter a valid date in YYYY-MM-DD format"
    ),
  expectedPassoutDate: Yup.string()
    .required("Expected passout date is required")
    .matches(
      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
      "Enter a valid date in YYYY-MM-DD format"
    ),
  staffId: Yup.string().required("Staff ID is required"),
  citizenshipId: Yup.string().required("Citizenship ID is required"),
  designation: Yup.string().required("Designation is required"),
  payrollType: Yup.string().required("Payroll type is required"),
});
export const initialValues = {
  name: "",
  email: "",
  password: "",
  role: "",
  phone: "",
  dob: "",
  paddress: "",
  taddress: "",
  bloodGroup: "",
  religion: "",
  gender: "",
  motherTongue: "",
  admissionNo: "",
  regdNo: "",
  academicYear: "",
  joiningDate: "",
  expectedPassoutDate: "",
  staffId: "",
  citizenshipId: "",
  designation: "",
  payrollType: "",
};

export const signupFormField = [
  { name: "name", placeholder: "Full Name" },
  { name: "email", placeholder: "Email Address" },
  { name: "password", placeholder: "Password" },
  { name: "phone", placeholder: "Phone Number" },
  { name: "dob", placeholder: "Date of Birth (YYYY-MM-DD)" },
  { name: "gender", placeholder: "Gender" },
  { name: "bloodGroup", placeholder: "Blood Group" },
  { name: "religion", placeholder: "Religion" },
  { name: "motherTongue", placeholder: "Mother Tongue" },
  { name: "role", placeholder: "Role" },
  { name: "paddress", placeholder: "Permanent Address" },
  { name: "taddress", placeholder: "Temporary Address" },
  { name: "admissionNo", placeholder: "Admission Number" },
  { name: "regdNo", placeholder: "Registration Number" },
  { name: "academicYear", placeholder: "Academic Year" },
  { name: "joiningDate", placeholder: "Joining Date (YYYY-MM-DD)" },
  {
    name: "expectedPassoutDate",
    placeholder: "Expected Passout Date (YYYY-MM-DD)",
  },
  { name: "staffId", placeholder: "Staff ID" },
  { name: "designation", placeholder: "Designation" },
  { name: "payrollType", placeholder: "Payroll Type" },
  { name: "citizenshipId", placeholder: "Citizenship ID" },
];
