import { Field } from "formik";

const Personal = () => {
  return (
    <div className="flex flex-col w-full gap-4 flex-wrap">
      <Field name="birthDate">
        {({ field, meta }) => (
          <div className="mb-4">
            <input
              type="date"
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

      <Field name="position">
        {({ field, meta }) => (
          <div className="mb-4">
            <select
              className="w-full p-4 text-lg border border-gray-600 rounded-md outline-none bg-white focus:border-red-600"
              {...field}
            >
              <option value="" defaultChecked disabled>
                Position
              </option>
              <option value="Senior">Senior</option>
              <option value="Middle">Middle</option>
              <option value="Junior">Junior</option>
            </select>
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

export default Personal;
