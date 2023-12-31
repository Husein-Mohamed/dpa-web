import React, { useState } from 'react';
// import StepperControl from '../components/StepperControl';
import Footer from '../components/Layouts/Footer';
import Stepper from '../components/Stepper';

const ComplaintForm: React.FC = () => {
    const [currentStep, setCurrentStep ] = useState<number>(1);
    const totalSteps=5

    return (
        <>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Guidlines</h6>
                                <h4 className="!text-white">Legal Framework</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper />
    </div>
            <Footer />
        </>
    );
};

export default ComplaintForm;