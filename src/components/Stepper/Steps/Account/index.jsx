import { Field } from "formik";

const Account = () => {
  return (
    <div className="flex flex-col w-full flex-wrap">
      <Field name="name">
        {({ field, meta }) => (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              {...field}
              className="w-full p-4 text-lg border border-gray-600 rounded-md outline-none focus:border-red-600"
            />
            {meta.touched && meta.error && (
              <div className="text-red-500 font-medium select-none">
                {meta.error}
              </div>
            )}
          </div>
        )}
      </Field>

      <Field name="surname">
        {({ field, meta }) => (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Surname"
              {...field}
              className="w-full p-4 text-lg border border-gray-600 rounded-md outline-none focus:border-red-600"
            />
            {meta.touched && meta.error && (
              <div className="text-red-500 font-medium select-none">
                {meta.error}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default Account;
