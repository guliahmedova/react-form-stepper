import { Form, Formik } from 'formik';
import { useState } from 'react';
import logo from './assets/imgs/logo.svg';
import Stepper from './components/Stepper';
import { About, Account, Personal, Work } from './components/Stepper/Steps';
import { validate } from './utils/validate';

const steps = ["Account", "Personal", "Work", "About"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Personal />
      case 3:
        return <Work />
      case 4:
        return <About />
    }
  }

  const handleNextBtn = async (formik) => {
    const errors = await formik.validateForm();
    console.log(errors);
    if (errors.isValid && currentStep < steps.length) {
      setCurrentStep(prevState => prevState + 1);
    }
    else if (currentStep === steps.length && formik.isValid && formik.dirty) {
      setCurrentStep(1);
      formik.resetForm();
    }
  }

  const handlePrevBtn = () => {
    if (currentStep > 1) {
      setCurrentStep(prevState => prevState = prevState - 1)
    }
  }

  return (
    <div className="lg:w-1/2 mt-10 mx-auto lg:px-0 px-10 w-full">
      <div className='w-full'>
        <img src={logo} alt="logo" className='size-20 mx-auto' />
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="w-full">
          <Formik initialValues={{
            name: '',
            surname: '',
            birthDate: '',
            position: '',
            message: '',
            email: '',
            phone: ''
          }}
            validateOnBlur={true}
            validateOnChange={true}
            validate={(values) => validate(values, currentStep)}
            validateOnMount={true}
          // onSubmit={(values) => console.log(values)}
          >
            {
              (formik) => (
                <Form className="w-full" >
                  {displayStep(currentStep)}
                  <div className="w-full flex items-center gap-5 mt-4">
                    {currentStep !== 1 && (
                      <button className="rounded-md bg-red-600 py-3 text-lg px-4 text-center text-white font-semibold w-full"
                        onClick={handlePrevBtn}
                        type='button'
                      >
                        Previous
                      </button>
                    )}
                    <button className="rounded-md bg-red-600 py-3 text-lg px-4 text-center text-white font-semibold w-full disabled:opacity-50"
                      onClick={() => handleNextBtn(formik)}
                      type='button'
                      disabled={!formik.errors.isValid}
                    >
                      {currentStep === steps.length ? "Submit" : "Next"}
                    </button>
                  </div>
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default App