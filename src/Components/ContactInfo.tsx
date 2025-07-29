import React from "react";
import ContactInfoItem from "./ContactInfoItem";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

type Props = {};

export default function ContactInfo({}: Props) {
  return (
    <div className=" p-16 flex flex-col gap-3 justify-center">
      <ContactInfoItem
        icon={FaPhoneAlt}
        title="Phone"
        description="+91 77087 83714"
        onclick={() => window.open("tel:+917708783714", "_blank")}
      />
      <ContactInfoItem
        icon={MdEmail}
        title="Email"
        description="vvignesh1011@gmail.com"
        onclick={() => window.open("mailto:vvignesh1011@gmail.com", "_blank")}
      />
      <ContactInfoItem
        icon={HiLocationMarker}
        title="Location"
        description="Trichy, Tamil Nadu, India"
      />
    </div>
  );
}
