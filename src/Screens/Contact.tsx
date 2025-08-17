import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col md:flex-row">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
