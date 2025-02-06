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
    <div className="bg-zinc-950 w-full max-w-screen-xl mx-auto py-2 px-16">
      <div className="grid grid-cols-4 gap-8 px-4 py-6 lg:py-8 ml-32 md:grid-cols-4">
        {/* Company section */}
        <div>
          <h2 className="mb-6 text-white text-sm font-semibold uppercase">
            {footerTitleOne}
          </h2>
          <ul className="text-zinc-400 font-light">
            <li className="mb-4">
              <Link
                href={homeLink}
                className="hover:text-white hover:duration-150"
              >
                {homeFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={skylineLink}
                className="hover:text-white hover:duration-150"
              >
                {skylineFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={airpalLink}
                className="hover:text-white hover:duration-150"
              >
                {airpalFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={teamLink}
                className="hover:text-white hover:duration-150"
              >
                {teamFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal section */}
        <div>
          <h2 className="mb-6 text-white text-sm font-semibold uppercase">
            {footerTitleThree}
          </h2>
          <ul className="text-zinc-400 font-light">
            <li className="mb-4">
              <Link
                href={termsOfUseLink}
                className="hover:text-white hover:duration-150"
              >
                {termsOfUseFooter}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={privacyPolicyLink}
                className="hover:text-white hover:duration-150"
              >
                {privacyPolicyFooter}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={ethicsLink}
                className="hover:text-white hover:duration-150"
              >
                {ethicsFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={dataProtectionLink}
                className="hover:text-white hover:duration-150"
              >
                {dataProtectionFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Need Help section */}
        <div>
          <h2 className="mb-6 text-white text-sm font-semibold uppercase">
            {footerTitleTwo}
          </h2>
          <ul className="text-zinc-400 font-light">
            <li className="mb-4">
              <Link
                href={contactLink}
                className="hover:text-white hover:duration-150"
              >
                {contactFooter}
              </Link>
            </li>

            <li className="mb-4">
              <Link
                href={faqLink}
                className="hover:text-white hover:duration-150"
              >
                {faqFooter}
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us section */}
        <div>
          <h2 className="mb-6 text-white text-sm font-semibold uppercase">
            {footerTitleFour}
          </h2>
          <ul className="text-zinc-400 font-light">
            <li className="mb-4">
              <a
                target="_blank"
                href={crunchbaseURL}
                className="hover:text-white hover:duration-150"
              >
                {crunchbaseFooter}
              </a>
            </li>

            <li className="mb-4">
              <a
                target="_blank"
                href={linkedinURL}
                className="hover:text-white hover:duration-150"
              >
                {linkedinFooter}
              </a>
            </li>

            <li className="mb-4">
              <a
                target="_blank"
                href={instagramURL}
                className="hover:text-white hover:duration-150"
              >
                {instagramFooter}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-2 mb-4 border-t-[2px] border-opacity-10 border-indigo-400" />

      {/* Bottom Note */}
      <div className="px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-center">
        <span className="text-sm text-zinc-400 sm:text-center block">
          {copyrightSign} {new Date().getFullYear()}{" "}
          <a href={averonURL}>{averonTrademarkText}</a>
          {rightsReservedText}
        </span>
      </div>
      <div className="w-full flex items-center justify-center space-x-2 mb-3 sm:text-center">
        <span className="text-sm text-zinc-400">
          {madeWithText}{" "}
          <Heart fill="#fa4d4d" stroke="#fa4d4d" className="w-5 h-5 inline" />{" "}
          {inSwitzerlandText}
        </span>
      </div>
    </div>
  );
};

export default Footer;
