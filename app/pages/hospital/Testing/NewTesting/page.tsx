"use client";

import CustomButton from "@/components/CustomButton";
import RequestNewOrder from "@/components/Orders/RequestNewOrder";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { useRef } from "react";

const page = () => {
  const stepperRef = useRef<any>(null);
  return (
    <div className="card h-full">
      <Stepper ref={stepperRef}>
        <StepperPanel header="Initial Form">
          <div className="flex flex-column h-fit  w-full">
            <div className=" w-full h-full">
              <RequestNewOrder />
            </div>
          </div>
          <div className="flex py-4">
            <CustomButton onClick={() => stepperRef.current.nextCallback()}>
              Next
            </CustomButton>
          </div>
        </StepperPanel>
        <StepperPanel header="Manufacturer Details">
          <div className="flex flex-column h-fit  w-full">
            <div className=" w-full h-full">
              <RequestNewOrder />
            </div>
          </div>
          <div className="flex gap-2 py-4">
            <CustomButton onClick={() => stepperRef.current.prevCallback()}>
              Back
            </CustomButton>
            <CustomButton onClick={() => stepperRef.current.nextCallback()}>
              Next
            </CustomButton>
          </div>
        </StepperPanel>
        <StepperPanel header="Status">
          <div className="flex flex-column h-12rem">
            <div className="">SENT</div>
          </div>
          <div className="flex py-4">
            <CustomButton onClick={() => stepperRef.current.prevCallback()}>
              Back
            </CustomButton>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};

export default page;
