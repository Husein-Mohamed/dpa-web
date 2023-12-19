// // stepper contraoller
// import React, { Dispatch, SetStateAction } from 'react';

// interface StepperControlProps {
//     currentStep: number;
//     setCurrentStep: Dispatch<SetStateAction<number>>;
// }

// const StepperControl: React.FC<StepperControlProps> = ({ currentStep, setCurrentStep, }) => {

//     return (
//         <div className="flex items-center justify-center">
//             <div className=" container mt-4 mb-8 flex justify-around">
//                 <button onClick={goNext} className=" curser-pointer border-slate-300 hover:bg-slate-700 hover:text-thite rounded-xl border-2 bg-white py-2 px-4 font-semibold uppercase text-secondary transition duration-200 ease-in-out">
//                     Next
//                 </button>
//                 <button
//                     className="btn"
                    
//                     // onClick={() => {
//                     //     setCurrentStep((prev) => Math.max(prev - 1, 1));
//                     // }}
//                 >
//                     Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default StepperControl;
// // import React from 'react';

// // interface StepperControlProps {
// //   currentStep: number;
// //   setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
// //   maxSteps: number;
// // }

// // const StepperControl: React.FC<StepperControlProps> = ({ currentStep, setCurrentStep, maxSteps }) => {
// //   const goNext = () => {
// //     if (currentStep < maxSteps) {
// //       setCurrentStep(currentStep + 1);
// //     }
// //   };

// //   const goBack = () => {
// //     if (currentStep > 1) {
// //       setCurrentStep(currentStep - 1);
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={goBack} disabled={currentStep === 1}>Back</button>
// //       <button onClick={goNext} disabled={currentStep === maxSteps}>Next</button>
// //     </div>
// //   );
// // };

// // export default StepperControl;
