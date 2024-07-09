/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from "../Components/Hero";
import AppointmentForm from "../Components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | DocDirect Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  )
}

export default Appointment