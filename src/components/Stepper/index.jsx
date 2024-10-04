const Stepper = ({ currentStep, steps }) => {
  const renderSteps = steps?.map((step, index) => (
    <div
      className={`flex items-center ${
        index === steps.length - 1 ? "w-auto" : "w-full"
      }`}
      key={index}
    >
      <div
        className={`md:size-28 size-16 rounded-full shadow font-semibold text-white flex flex-col items-center justify-center md:text-lg text-xs ${
          index + 1 < currentStep
            ? "bg-green-600"
            : index + 1 === currentStep
            ? "bg-blue-600"
            : "bg-red-600"
        }`}
      >
        {index + 1 < currentStep ? (
          <span className="lg:text-6xl text-2xl">&#10003;</span>
        ) : (
          step
        )}
      </div>
      {index !== steps.length - 1 && (
        <div
          className={`flex-auto border-4 border-red-600 ${
            index + 1 < currentStep ? "border-green-600" : "border-red-600"
          }`}
        ></div>
      )}
    </div>
  ));

  return (
    <div className="w-full my-6 border border-gray-500 rounded-md p-4 flex items-center justify-between">
      {renderSteps}
    </div>
  );
};

export default Stepper;
