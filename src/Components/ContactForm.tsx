import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 bg-[--card-bg] p-[20px] rounded-md font-medium flex-1">
      <div className="col-span-full ">
        <h2 className=" sub_title text-[--primary] ">Let's work to gather</h2>
        <p className="text-[tertiary]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio!
        </p>
      </div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Fist Name"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
      />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="text" name="phone" id="phone" placeholder="Phone" />
      <textarea name="message" id="message" className="min-h-36 col-span-2" />
      <button className="btn w-fit">Send message</button>
    </div>
  );
}
