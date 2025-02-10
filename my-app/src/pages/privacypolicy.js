import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-10 md:py-16 xl:py-32">
      <div className="px-5 py-2 md:py-6 lg:py-5 md:px-20 lg:px-20">
        <div className="flex justify-center items-center">
          <p className="text-2xl md:text-5xl lg:text-3xl xl:text-4xl font-semibold text-black font-exo">
            Privacy Policy
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="w-[90%] lg:w-[55%] xl:w-[55%] text-xs md:text-xl lg:text-xs xl:text-base text-center font-nunito-sans leading-loose md:leading-10 lg:leading-6 xl:leading-6 text-gray-700 font-light">
            Effective: February, 2010 | Last Modified: October 2024
          </p>
        </div>
      </div>
      <div className="px-5 py-2 md:py-4 md:px-20 lg:px-32 lg:py-5">
        <div className="text-xs md:text-xl lg:text-xs xl:text-base font-nunito-sans text-gray-700 font-light">
          <h2 className="font-semibold text-lg">Introduction</h2>
          <p>
            This Privacy Policy explains how CampusGenie collects, uses, and
            discloses your personal information when you use our platform.
          </p>

          <h2 className="font-semibold text-lg mt-4">Data Collection</h2>
          <h3 className="font-medium">Information We Collect</h3>
          <p>
            We collect information that you provide to us directly, such as when
            you create an account, engage in learning activities, or interact
            with our services.
          </p>

          <h3 className="font-medium mt-2">
            Automatically Collected Information
          </h3>
          <p>
            We may also collect information automatically when you use
            CampusGenie, such as device information, IP address, and usage
            patterns.
          </p>

          <h2 className="font-semibold text-lg mt-4">Data Usage</h2>
          <h3 className="font-medium">How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, personalize your experience, and communicate with you.
          </p>

          <h2 className="font-semibold text-lg mt-4">Data Sharing</h2>
          <h3 className="font-medium">Third-Party Services</h3>
          <p>
            We may share your information with trusted third-party service
            providers who perform services on our behalf, such as data storage
            and customer support.
          </p>

          <h3 className="font-medium mt-2">Legal Obligations</h3>
          <p>
            We may disclose your information if required by law or in response
            to a valid request by public authorities.
          </p>

          <h2 className="font-semibold text-lg mt-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information, as well as to object to certain processing activities.
          </p>

          <h2 className="font-semibold text-lg mt-4">Data Security</h2>
          <p>
            We take appropriate measures to protect your information from
            unauthorized access, use, or disclosure. However, no system is
            completely secure.
          </p>

          <h2 className="font-semibold text-lg mt-4">Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on our website.
          </p>

          <h2 className="font-semibold text-lg mt-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@campusgenie.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
