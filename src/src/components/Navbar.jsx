import { useState } from "react";
import { logo } from "../assets/home";
import Container from "./Container";
import { MdMenu } from "react-icons/md";

function Navbar({ isFormOpen, setIsFormOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-40 py-2 !text-white">
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
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
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
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="#benefits"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Benefits
                </a>
                <a
                  href="#application"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Application Process
                </a>
                <a
                  href="#jio"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Why Choos Us?
                </a>
                <a
                  href="#testimonials"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Testimonials
                </a>
                <a
                  href="#faqs"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  FAQs
                </a>
                <a
                  href="#contact"
                  className="hover:bg-button-primary rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button !border-none"
              className="h-12 w-12 bg-gray-800"
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
            <div className="space-y-1 px-2 pb-3 pt-2 text-black sm:px-3">
              <a
                href="#home"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
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
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Eligibility Criteria
              </a>
              <a
                href="#benefits"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Benefits
              </a>
              <a
                href="#application-process"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Application Process
              </a>
              <a
                href="#why-choose-jio"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Why Choos Us?
              </a>
              <a
                href="#testimonials"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Testimonials
              </a>
              <a
                href="#faqs"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                FAQs
              </a>
              <a
                href="#contact-us"
                className="hover:bg-primary-base hover:bg-button-primary block rounded-md px-3 py-2 text-base font-medium hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;