import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const taskSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  status: Yup.string().required("Status is required"),
});

const UserModal = ({ onClose }) => {
  const initialValues = {
    title: "",
    description: "",
    status: "Pending",
  };

  const handleSubmit = (values) => {
    console.log(values);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Create Task</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={taskSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 text-left">
                  Title
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  name="title"
                  placeholder="Enter title"
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 ${
                    errors.title && touched.title
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block mb-1 text-left">
                  Description
                  <span className="text-red-500">*</span>
                </label>

                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  placeholder="Enter description"
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block mb-1 text-left">Status</label>

                <Field
                  as="select"
                  name="status"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>

                  <option value="In Progress">In Progress</option>

                  <option value="Completed">Completed</option>
                </Field>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserModal;
