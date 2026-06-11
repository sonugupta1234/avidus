import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../api/authApi";
import { showError, showSuccess } from "../../utils/toast";
import useAuth from "../../Pages/hooks/useAuth";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const { login } = useAuth(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const logindata = await loginUser(values);
      login(logindata.data.token, logindata.data.user);
      showSuccess(logindata.data.message);

      navigate("/");
      resetForm();
    } catch (error) {
      showError(error);
      console.log(error);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 text-left font-medium">
                  Email
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1 text-left"
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
                  placeholder="Enter password"
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1 text-left"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
