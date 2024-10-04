import { Field } from "formik";

const Work = () => {
  return (
    <div className="flex flex-col w-full gap-4 flex-wrap">
      <Field name="email">
        {({ field, meta }) => (
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
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

      <Field name="phone">
        {({ field, meta }) => (
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
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

export default Work;
