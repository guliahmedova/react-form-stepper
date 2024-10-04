import { Field } from "formik";

const About = () => {
  return (
    <div className="flex flex-col w-full gap-4 flex-wrap">
      <Field name="message" cols="30" rows="10">
        {({ field, meta }) => (
          <div className="mb-4">
            <textarea
              type="text"
              {...field}
              className="focus:border-red-600 w-full p-4 text-lg border border-gray-600 rounded-md outline-none h-32"
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

export default About;
