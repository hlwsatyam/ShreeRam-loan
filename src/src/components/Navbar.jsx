import { useState } from "react";
import { logo } from "../assets/home";
import Container from "./Container";
import { MdMenu } from "react-icons/md";

function Navbar({ isFormOpen, setIsFormOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="!text-white z-40 py-2">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              className="h-[40px] w-[120px] cursor-pointer"
              src={
                "https://media.licdn.com/dms/image/v2/D4E22AQGPm9Yn-om5Hw/feedshare-shrink_800/feedshare-shrink_800/0/1718646445687?e=2147483647&v=beta&t=E7-F_PlPZ8bI1Jj_HJlLDBYnWtfFjS3RbcsGZComa-s"
              }
              onClick={() => setIsFormOpen(!isFormOpen)}
              alt="Workflow"
            />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Home
                </a>
                {/* <a
                  href="#about"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a> */}
                <a
                  href="#eligibility"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="#benefits"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Benefits
                </a>
                <a
                  href="#application"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Application Process
                </a>
                <a
                  href="#jio"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Why Choos Us?
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Testimonials
                </a>
                <a
                  href="#faqs"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  FAQs
                </a>
                <a
                  href="#contact"
                  className="hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Contact Us
                </a>
                <a
                  href="/check-status"
                  className="hover:text-white border-b-2 border-e-primary-end  rounded-md px-3 py-2 text-sm font-medium hover:bg-button-primary"
                >
                  Check Loan Status{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button !border-none"
              className="bg-gray-800 h-12 w-12"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu size={30} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="transition-all md:hidden" id="mobile-menu">
            <div className="text-black space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="#home"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Home
              </a>
              {/* <a
                href="#about"
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a> */}
              <a
                href="#eligibility-criteria"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Eligibility Criteria
              </a>
              <a
                href="#benefits"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Benefits
              </a>
              <a
                href="#application-process"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Application Process
              </a>
              <a
                href="#why-choose-jio"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Why Choos Us?
              </a>
              <a
                href="#testimonials"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Testimonials
              </a>
              <a
                href="#faqs"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                FAQs
              </a>
              <a
                href="#contact-us"
                className="hover:bg-primary-base hover:text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary"
              >
                Contact Us
              </a>
              <a
                href="/check-status"
                className="hover:text-white rounded-md  border-b-2 border-e-primary-end  px-3 py-2 text-sm font-medium hover:bg-button-primary"
              >
                Check Loan Status{" "}
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
