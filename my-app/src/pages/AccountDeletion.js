import React from "react";

const AccountDeletion = () => {
  return (
    <div className="py-10 px-5 md:px-20 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-black text-center">
        Account Deletion
      </h2>
      <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
        To delete your account on CampusGenie, follow these steps:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700 text-base md:text-lg">
        <li>Click on the profile icon in the app.</li>
        <li>
          Go to <strong>Account & Settings</strong>.
        </li>
        <li>
          Select <strong>Delete Account</strong>.
        </li>
        <li>You will be prompted with a confirmation message.</li>
        <li>
          Click <strong>Delete</strong> to proceed.
        </li>
      </ul>
      <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
        Once you confirm, you will be automatically logged out. Your account
        will be suspended and permanently deleted within 30 minutes.
      </p>
      <h3 className="mt-6 text-xl font-semibold text-black">
        Implications of Account Deletion
      </h3>
      <p className="mt-2 text-gray-700 text-base md:text-lg leading-relaxed">
        Please note that deleting your account is irreversible. This means:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700 text-base md:text-lg">
        <li>
          All your data, including profile information and preferences, will be
          permanently erased.
        </li>
        <li>
          You will lose access to all features and services associated with your
          account.
        </li>
        <li>
          Any active subscriptions or benefits tied to your account will be
          canceled.
        </li>
      </ul>
      <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
        If you have any concerns or need further assistance, please contact us
        at <strong>support@campusgenie.com</strong> before proceeding with
        account deletion.
      </p>
    </div>
  );
};

export default AccountDeletion;
