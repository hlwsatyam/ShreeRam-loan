import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Discover Your Loan Options",
    text: "Explore a variety of loan options tailored to your financial needs. From personal loans to business funding, we’ve got you covered.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "click on Apply Now Button",
    text: "Register on our platform by providing basic details. Start your loan application by filling out the required forms with ease.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Follow the Application Steps",
    text: "Submit your documents, complete the verification process, and track your loan application status with real-time updates.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Receive Your Funds Quickly",
    text: "Once approved, the loan amount will be disbursed directly to your account, enabling you to meet your financial goals hassle-free.",
  },
];


export default function HowItWorks() {
  return (
    <section id="application" className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
