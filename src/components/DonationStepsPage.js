import React from "react";

function DonationStepsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Steps to Donate</h1>
      <ol className="list-decimal list-inside">
        <li className="text-lg mb-4">
          <strong>Choose a Cause:</strong> Browse through our list of causes and
          select the one you're passionate about. Whether it's supporting
          education, healthcare, the environment, or social justice, we have a
          variety of causes for you to choose from.
        </li>
        <li className="text-lg mb-4">
          <strong>Make a Donation:</strong> Once you've chosen a cause, decide
          on the amount you'd like to donate. Every contribution, no matter how
          small, makes a difference. You can choose to make a one-time donation
          or set up recurring donations for ongoing support.
        </li>
        <li className="text-lg mb-4">
          <strong>Complete the Payment:</strong> Enter your payment information
          securely through our trusted payment gateway. We accept all major
          credit cards and PayPal, making it convenient for you to support your
          chosen cause.
        </li>
        <li className="text-lg mb-4">
          <strong>Receive Confirmation:</strong> After completing your donation,
          you'll receive a confirmation email with details about your
          contribution. You'll also have the option to create an account to
          track your donation history and receive updates on the impact of your
          support.
        </li>
        <li className="text-lg mb-4">
          <strong>Spread the Word:</strong> Help us amplify the impact of your
          donation by sharing your support on social media. Encourage your
          friends, family, and followers to join you in making a difference.
        </li>
      </ol>
    </div>
  );
}

export default DonationStepsPage;
