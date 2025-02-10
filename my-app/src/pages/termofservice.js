import React from "react";

const TermsOfService = () => {
  return (
    <div className="py-10 md:py-16 xl:py-32">
      <div className="px-5 py-2 md:py-6 lg:py-5 md:px-20 lg:px-20">
        <div className="flex justify-center items-center">
          <p className="text-2xl md:text-5xl lg:text-3xl xl:text-4xl font-semibold text-black font-exo">
            Terms of Service
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="w-[90%] lg:w-[55%] xl:w-[55%] text-xs md:text-xl lg:text-xs xl:text-base text-center font-nunito-sans leading-loose md:leading-10 lg:leading-6 xl:leading-6 text-gray-700 font-light">
            Effective: February 2010 | Last Modified: October 2024
          </p>
        </div>
      </div>

      <div className="px-5 py-2 md:py-4 md:px-20 lg:px-32 lg:py-5">
        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Introduction</h2>
          <p className="text-gray-700">
            These Terms and Conditions govern your use of the CampusGenie
            platform. By using our services, you agree to comply with these
            terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Account Registration</h2>
          <h3 className="font-semibold text-black">Eligibility</h3>
          <p className="text-gray-700">
            You must be at least 13 years old to create an account on
            CampusGenie.
          </p>
          <h3 className="font-semibold text-black">Account Security</h3>
          <p className="text-gray-700">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Use of the Platform</h2>
          <h3 className="font-semibold text-black">Prohibited Activities</h3>
          <p className="text-gray-700">
            You may not use the platform for any illegal or unauthorized
            purpose, including but not limited to engaging in activities that
            harm the CampusGenie community.
          </p>
          <h3 className="font-semibold text-black">User Content</h3>
          <p className="text-gray-700">
            You retain ownership of any content you post on the platform, but
            you grant us a license to use, display, and distribute your content
            to enhance the user experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Termination</h2>
          <p className="text-gray-700">
            We may suspend or terminate your account if you violate these terms
            or engage in behavior that disrupts the platform's integrity or user
            experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            CampusGenie is not liable for any indirect, incidental, or
            consequential damages arising from your use of the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Governing Law</h2>
          <p className="text-gray-700">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the jurisdiction in which CampusGenie
            operates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Changes to Terms</h2>
          <p className="text-gray-700">
            We may modify these Terms and Conditions at any time. We will notify
            you of any changes by posting the updated terms on our website or
            within the app.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-black">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please
            contact us at{" "}
            <a href="mailto:support@campusgenie.com" className="text-blue-500">
              support@campusgenie.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;