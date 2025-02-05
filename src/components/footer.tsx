import React from "react";
import {
  homeFooter,
  skylineFooter,
  airpalFooter,
  teamFooter,
  contactFooter,
  termsOfUseFooter,
  faqFooter,
  crunchbaseURL,
  linkedinURL,
  instagramURL,
  footerTitleOne,
  footerTitleTwo,
  footerTitleThree,
  footerTitleFour,
  homeLink,
  skylineLink,
  airpalLink,
  teamLink,
  contactLink,
  faqLink,
  privacyPolicyFooter,
  dataProtectionFooter,
  termsOfUseLink,
  privacyPolicyLink,
  ethicsFooter,
  ethicsLink,
  dataProtectionLink,
  instagramFooter,
  crunchbaseFooter,
  linkedinFooter,
  averonURL,
  madeWithText,
  inSwitzerlandText,
  copyrightSign,
  averonTrademarkText,
  rightsReservedText,
} from "@/data/content";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-background w-full max-w-screen-xl mx-auto py-2 px-16">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {/* Company section */}
        <div>
          <h2 className="mb-6 text-primary text-sm font-semibold uppercase">
            {footerTitleOne}
          </h2>
          <ul className="text-secondary font-medium">
            <li className="mb-4">
              <Link
                href={homeLink}
                className="hover:text-primary hover:duration-150"
              >
                {homeFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={skylineLink}
                className="hover:text-primary hover:duration-150"
              >
                {skylineFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={airpalLink}
                className="hover:text-primary hover:duration-150"
              >
                {airpalFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={teamLink}
                className="hover:text-primary hover:duration-150"
              >
                {teamFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal section */}
        <div>
          <h2 className="mb-6 text-primary text-sm font-semibold uppercase">
            {footerTitleThree}
          </h2>
          <ul className="text-secondary font-medium">
            <li className="mb-4">
              <Link
                href={termsOfUseLink}
                className="hover:text-primary hover:duration-150"
              >
                {termsOfUseFooter}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={privacyPolicyLink}
                className="hover:text-primary hover:duration-150"
              >
                {privacyPolicyFooter}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={ethicsLink}
                className="hover:text-primary hover:duration-150"
              >
                {ethicsFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={dataProtectionLink}
                className="hover:text-primary hover:duration-150"
              >
                {dataProtectionFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Need Help section */}
        <div>
          <h2 className="mb-6 text-primary text-sm font-semibold uppercase">
            {footerTitleTwo}
          </h2>
          <ul className="text-secondary font-medium">
            <li className="mb-4">
              <Link
                href={contactLink}
                className="hover:text-primary hover:duration-150"
              >
                {contactFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={faqLink}
                className="hover:text-primary hover:duration-150"
              >
                {faqFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us section */}
        <div>
          <h2 className="mb-6 text-primary text-sm font-semibold uppercase">
            {footerTitleFour}
          </h2>
          <ul className="text-secondary font-medium">
            <li className="mb-4">
              <a
                target="_blank"
                href={crunchbaseURL}
                className="hover:text-primary hover:duration-150"
              >
                {crunchbaseFooter}
              </a>
            </li>

            <li className="mb-4">
              <a
                target="_blank"
                href={linkedinURL}
                className="hover:text-primary hover:duration-150"
              >
                {linkedinFooter}
              </a>
            </li>

            <li className="mb-4">
              <a
                target="_blank"
                href={instagramURL}
                className="hover:text-primary hover:duration-150"
              >
                {instagramFooter}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note section */}
      <div className="px-4 py-2 bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center block">
          {copyrightSign} {new Date().getFullYear()}{" "}
          <a href={averonURL}>{averonTrademarkText}</a>
          {rightsReservedText}
        </span>
      </div>
      <div className="w-full flex items-center justify-center space-x-2 sm:text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {madeWithText}{" "}
          <Heart fill="red" stroke="red" className="w-5 h-5 inline" />{" "}
          {inSwitzerlandText}
        </span>
      </div>
    </div>
  );
};

export default Footer;
