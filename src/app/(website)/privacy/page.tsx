import React from "react";
import { cormorant } from "../layout";

export default function Privacy() {
  return (
    <div className="multipleH2 mx-auto mb-20 mt-10 space-y-10 md:w-[70%]">
      <h1 className={`${cormorant.className} text-center text-6xl font-bold`}>
        Privacy Policy
      </h1>
      <div>
        <h2 className={`${cormorant.className}`}>
          Welcome to The Culinary Fair!
        </h2>
        <p>
          This Privacy Policy outlines our commitment to your privacy and
          protecting your personal information when you use our website.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>Information We Collect</h2>

        <div>
          We may collect the following information when you use our website:
          <ul>
            <li>
              Only information that may be relevant for surveys, offers, or to
              improve our services.
            </li>
            <li>Only if you have done our surveys.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className={`${cormorant.className}`}>
          How We Use Your Information
        </h2>
        <p>
          We collect this information to understand your needs better and
          provide you with a more personalized service. Specifically, we use
          your information for the following purposes: To improve our products
          and services. To customize our website to align with your interests.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>Security</h2>
        <p>
          We are dedicated to safeguarding your information and have implemented
          suitable physical, electronic, and managerial procedures to prevent
          unauthorized access or disclosure.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>Advertising</h2>
        <p>
          The Culinary Fair is affiliated with third-party advertising partners.
          These partners may collect and use data for advertising purposes.
        </p>
        <p>
          You can learn more about their data usage and opt-out options by
          visiting the provided links. We do not share your personal information
          with these third-party advertisers.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>Cookies</h2>
        <p>Our website does not use cookies!</p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>Links to Other Websites</h2>

        <p>
          The Culinary Fair may contain links to other websites. However, we do
          not have control over these external sites.
        </p>
        <p>
          We can not ensure the security or privacy of any information you
          provide while visiting other websites or links we provide. When you
          leave The Culinary Fair site, so please read the privacy policies of
          the sites you visit.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>
          Participation in Affiliate Programs
        </h2>
        <p>
          We are a member of the affiliate marketing program. This implies that
          we may display customized links given by retailers to track referrals
          to their websites, and we may get an advertising charge for any sales
          made through these connections.
        </p>
      </div>
      <div>
        <h2 className={`${cormorant.className}`}>
          Last but not Least Important
        </h2>
        <p>
          Without your consent or unless it&#39;s forced by law, we will not
          sell, distribute or lease your personal information to other parties.
        </p>
        <p>
          If you have any concerns or requests about your personal information,
          or if you want to withdraw your permission to data sharing, please
          email us at anjabulatovic@icloud.com.
        </p>
        <p>
          We take your privacy seriously and will respond to your requests
          promptly. Please note that certain requests may affect your access to
          specific website features.
        </p>
        <p>
          This Privacy Policy was last updated on 11/06/2023. We reserve the
          right to revise this policy as needed, and any changes will be posted
          on this page.
        </p>
      </div>
    </div>
  );
}
