import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../api/authApi";
import { showError, showSuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      registerUser(values);
      showSuccess("Registration Sucessfull");
      navigate("/login");
      resetForm();
    } catch (error) {
      showError(error);
      console.log(error);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-full bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 text-left font-medium">
                  Name
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.name && touched.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />

                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm text-left mt-1"
                />
              </div>

              <div>
                <label className="block mb-1 text-left font-medium">
                  Email
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm text-left mt-1"
                />
              </div>

              <div>
                <label className="block mb-1 text-left font-medium">
                  Password
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                    errors.password && touched.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm text-left mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
