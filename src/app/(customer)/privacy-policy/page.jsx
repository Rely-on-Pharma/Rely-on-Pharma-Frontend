"use client";
import { colors } from "@/constants/colors.js";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CustomPrivacyPolicy = styled(Box)(({ theme }) => ({
  ".heading": {
    padding: "4vh 0vh",
    fontSize: "10vh",
    color: colors?.primaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vh",
    },
  },
  ".date": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    olor: colors?.primaryLight,
  },
  ".subheading": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
  ".body": {
    padding: "2vh 15vw",
    whiteSpace: "pre-line",
    fontSize: "2.5vh",
    fontWeight: "500",
    color: colors?.secondaryDark,
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
    ".list-items": {
      listStyleType: "disc",
      padding: "0vh 4vw",
      ".item": {
        margin: "1vh 0vw",
      },
    },
  },
  ".bheading": {
    padding: "0.5vh 15vw",
    fontSize: "2.8vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
}));

const PrivacyPolicy = () => {
  return (
    <CustomPrivacyPolicy>
      <Typography className="heading" textAlign={"center"}>
        Privacy Policy
      </Typography>
      <Typography className="date">Revised Date: 9th May 2024</Typography>
      <Typography className="bheading">
        OBJECTIVE, SCOPE AND APPLICABILITY
      </Typography>
      <div className="body">
        <ul className="list-items">
          <li className="item">
            Vayor Tricks Private Limited Ltd. (“<b>Company</b>”, “<b>we</b>
            ”, “<b>our</b>”, “<b>us</b>”) respects an individual’s privacy and
            is committed to protecting the same. This Privacy Policy (“
            <b>Policy</b>”) describes how we collect, use, disclose and transfer
            Personal Information (as defined below), through platforms
            controlled by the Company viz. www.theskinluxury.in and mobile
            sites/application (the “<b>Platforms</b>”) of the individuals who
            browse, or access the Platform or provide information on or through
            the Platform, or whose information the Company otherwise collects,
            receives or processes in connection with the offer and sale of its
            products (“<b>Products</b>”) (hereinafter, collectively referred to
            as “<b>Customers</b>”, “<b>you</b>”, “<b>your</b>”) and ensure its
            compliance with applicable laws and regulations. This Policy does
            not apply to Personal Information collected from you offline (unless
            otherwise specified), to Company’s websites that do not link to this
            Policy, to Customers of countries other than India or to third-party
            websites to which Platform may link.
          </li>
          <li className="item">
            By accessing and/or using our Platform and providing the information
            as explained in this Policy, you consent to the collection and use
            of the information you disclose on the Platform in accordance with
            this Policy, including but not limited to your consent for sharing
            your information as per this Policy. We encourage you to read this
            Policy regarding the collection, use, and disclosure of your
            information. If you are not comfortable with any of the terms or
            policies described in this Policy, you may choose to discontinue
            usage of the Platform.
          </li>
          <li className="item">
            Further, you agree and consent to receive all communications related
            to our services on the mobile number provided by you to the Company,
            even if such mobile number is registered under DND/NCPR list under
            the Telecom Commercial Communications Customer Preference
            Regulations, 2018 (“<b>TRAI Regulations</b>”). Notwithstanding your
            registration with the National Do Not Call Registry (In Fully or
            Partly blocked category under National Customer Preference Register
            set up under the Telecom Regulatory Authority of India), you hereby
            express your interest and accord informed consent to receive
            communications (including commercial communications) in relation to
            the Company’s services. You further confirm that no communication to
            you from the Company or on behalf of the Company shall be construed
            as Unsolicited Commercial Communication under Regulation 2(bw) of
            the TRAI Regulations and you have specifically opted to receive
            communications in this regard on the mobile number provided by you.
          </li>
          <li className="item">
            For the purpose of this Policy, the term “
            <b>Personal Information</b>” shall mean any information that relates
            to you, which, either directly or indirectly, in combination with
            other information available or likely to be available with the
            Company, is capable of identifying you, which is submitted to and/or
            collected over the Platform and maintained by the Company in an
            accessible form, provided that, any information that is freely
            available or accessible in public domain or furnished under the
            Right to Information Act, 2005 or any other law for the time being
            in force shall not be regarded as Personal Information for the
            purposes of this Policy.
          </li>
        </ul>
      </div>
      <Typography className="bheading">
        HOW DO WE COLLECT PERSONAL INFORMATION ?
      </Typography>
      <div className="body">
        <ul className="list-items">
          <li className="item">
            We communicate with you through a variety of means and channels,
            including our Platform, email, phone or text messaging on your
            mobile phone, although we do generally note that our preferred means
            of communication is email which has the least impact on the
            environment. Such communications may involve giving to you, as well
            as receiving information from you. We collect and receive the
            Personal Information in the following ways:
          </li>
          <li className="item">
            <b>When you submit your Personal Information on our Platform</b>:
            The Company collects and stores the Personal Information that you
            provide while using our Platform including when you enter your
            Personal Information into data fields on the Platform as part of a
            voluntary registration process. We also collect and store your
            Personal Information through sponsored social media platforms,
            events, etc. For example, you may submit your name, postal address,
            e-mail address, and/or other information in order to register, place
            orders for the Products, receive information about various Products,
            register for newsletters, receive offers, contact Company’s customer
            care service, or respond to the Company’s surveys. To protect your
            privacy, you should not provide the Company with any information
            that is not specifically requested or that you do not wish to share.
            You can choose not to provide certain information, but then you
            might not be able to use our Platform or certain features of our
            Platform.
          </li>
          <li className="item">
            <b>Automatic collection</b>: We automatically collect and store
            certain types of information whenever you interact with us. Such
            information includes information about your use of the Platform,
            your interaction with content and services available through the
            Platform. Like many websites, unidentifiable information may be
            collected using various technologies, such as cookies, Internet
            tags, and web beacons. Your Internet browser automatically transmits
            to the Platform some of this unidentifiable information, such as the
            URL of the Website you just visited and the browser version your
            computer is operating. Passive information collection technologies
            can make your use of the Platform easier by allowing the Company to
            provide better service, customize sites based on consumer
            preferences, compile statistics, analyze trends, and otherwise
            administer and improve the Platform. Certain features of the
            Platform may not work without use of passive information collection
            technologies. Information collected by these technologies cannot be
            used to identity you without additional identifiable information. We
            may also receive/store information about your location and your
            mobile device, including a unique identifier for your device.
          </li>
          <li className="item">
            <b> Other sources</b>: We might receive information about you from
            other sources, such as updated delivery and address information from
            third parties, which we use to correct our records and deliver your
            next purchase more easily. Further, we may receive information about
            you from third parties that feature our Products or promotional
            offers if you opt-in to receive information from us. You may also
            choose to participate in a third party application or social media
            sites through which you allow us to collect (or the third party to
            share) Personal Information about you, including usage information.
            We may also receive information, such as marketing related or
            demographic information about you from third parties to enhance our
            ability to tailor our content and offer you the Products that we
            believe may be of interest to you. The Company is not responsible
            for the privacy practices of such third-party websites which it does
            not own, manage or control.
          </li>
        </ul>
      </div>
      <Typography className="bheading">
        WHAT PERSONAL INFORMATION DO WE COLLECT?
      </Typography>
      <div className="body">
        <ul className="list-items">
          <li className="item">
            The Company limits itself to collect information which is necessary
            to ensure accurate services and is required to process your order of
            the Product or provide a refund and continually improve our Products
            and services.
          </li>
          <li className="item">
            Following are the categories of Personal Information that is
            collected and processed by us:
          </li>
          <ol className="list-items">
            <li className="item">
              <i>your name, e-mail and postal addresses,</i>
            </li>
            <li className="item">
              <i>
                any open data and public records such as information about you
                that is openly available on the Internet
              </i>
            </li>
            <li className="item">
              <i>
                names of people to whom purchases have been shipped including
                address and telephone numbers, IP addresses;
              </i>
            </li>
            <li className="item">
              <i>
                Product interest information and in certain circumstances, your
                opinions and individual preferences, etc.;
              </i>
            </li>
            <li className="item">
              <i>
                You may also provide us with information like financial
                information such as bank account or credit card or debit card or
                other payment instrument details, password for availing the
                Products at our Platform;
              </i>
            </li>
            <li className="item">
              We may collect and use technical data and related information,
              including but not limited to, technical information about your
              device, system and application software, and peripherals, that is
              gathered periodically to facilitate the provision of software
              updates, product support and other services to you (if any)
              related to the Platform.
            </li>
          </ol>
        </ul>
      </div>
      <Typography className="bheading">
        WHAT IS THE PURPOSE FOR WHICH THE PERSONAL INFORMATION IS COLLECTED?
      </Typography>
      <div className="body">
        The Company may use your Personal Information to:
        <br />
        <ul className="list-items">
          <li className="item">verify your identity</li>
          <li className="item">
            fulfill the Product purchases and transactions
          </li>
          <li className="item">
            communicate with you about your account and activities on the
            Platform
          </li>
          <li className="item">
            allow us to better serve you in responding to your requests
          </li>
          <li className="item">ask for ratings and reviews of the Products</li>
          <li className="item">follow up with you after correspondence</li>
          <li className="item">
            comply with our legal obligations, policies and procedures,
            including compliance with relevant industry standards and the
            enforcement of our terms and conditions
          </li>
          <li className="item">
            help us learn more about your shopping preferences
          </li>
          <li className="item">
            conduct marketing and performance research to assist us in measuring
            our customer services, benchmarking our performance and to help us
            improve your shopping experiences and Product offerings;
          </li>
          <li className="item">
            send communication related to order updates and offers through
            e-mail
          </li>
          <li className="item">
            analyze trends, track Customer’s web page movements, help identify
            you and your shopping cart for aggregate use
          </li>
          <li className="item">
            prevent, detect, investigate and take action against crimes
            (including but not limited to fraud and other financial crimes), any
            other illegal activities, suspected fraud, or violations of
            Company’s terms and conditions in any jurisdiction;
          </li>
          <li className="item">
            establish, exercise or defend legal rights in connection with legal
            proceedings (including any prospective legal proceedings) and seek
            professional or legal advice in relation to such legal proceedings;
            and.
          </li>
          <li className="item">
            comply with any applicable law, regulation, legal process or
            enforceable governmental request.
          </li>
        </ul>
        <br />
        The legal basis on which we collect your Personal Information:
        <br />
        <ul className="list-items">
          <li className="item">
            <b>Performance of a Contract</b>: Some of the Personal Information
            processed is performed on the basis that it is necessary for the
            performance of our agreement with you. An example of this would be
            where we process your Personal Information for delivering the
            Products ordered by you on our Platform.
          </li>
          <li className="item">
            <b>Legitimate Interest</b>: Legitimate interests will include where
            we send you marketing information about our Products, communicate
            with you in order to serve you better.
          </li>
          <li className="item">
            <b>Compliance with a Legal Obligation</b>: For certain types of
            processing it is necessary in order to allow us to comply with a
            legal obligation. An example of this would be where we are required
            to retain business records for fixed periods of time in order to
            comply with local legal requirements.
          </li>
          <li className="item">
            <b>Consent</b>: Finally, in certain limited situations, we rely on
            your consent in order to process your Personal Information. Where we
            require your consent in order to collect and process certain
            Personal Information, we seek your consent at the time of provision,
            and such processing will only be performed where consent is secured.
            You can withdraw your consent, as per this Policy where applicable,
            by sending an email to care@theskinluxury.com.
          </li>
        </ul>
        <ul>
          <li>
            Payment Information: You may provide payment information when you
            use the Platform to buy our Products, including credit cards
            numbers, billing information using third-party intermediary PCI-DSS
            compliant service providers. The payment information is provided
            directly by you, via the Platform, into the PCI/DSS-compliant
            payment processing service to which the Company subscribes, and the
            Company does not, itself, process or store the payment information,
            except as stated herein. Further, these intermediaries are not
            permitted to store, retain, or use your billing information for any
            purpose except for payment processing on our behalf.
          </li>
          <br />
          <li>
            If you use the Platform, you are responsible for maintaining the
            confidentiality of your access information and password. You are
            responsible for restricting access to your computer, mobile device,
            etc., and you agree to accept responsibility for all activities that
            occur under your password. We cannot secure any information that you
            release on you own, that you request us to release or that is
            released through another third party to whim you have given access.
          </li>
        </ul>
        <br />
        <b>
          <i>
            We do not rent or sell your Personal Information to any third party.
          </i>
        </b>
        <br />
        <br />
        <ul>
          <li>
            Should we plan to merge/sell all or substantially all of our
            business to another business entity or similar other transaction or
            be required by that business entity, we may transfer or disclose
            your Personal Information to that business entity who may collect,
            use or disclose such information for the purposes of evaluating the
            proposed transaction or for operating and managing the affairs of
            the acquired business or for other purposes identified in this
            Policy.
          </li>
          <br />
          <li>
            We may retain other companies and individuals to perform functions
            on our behalf consistent with this Policy. Examples include order
            processing companies, courier companies, data analysis firms,
            customer support specialists, email vendors, web-hosting companies
            and fulfillment companies (e.g., companies that coordinate
            mailings). Such third parties may be provided with access to
            Personal Information needed to perform their functions but may not
            use such information other than on our behalf and in accordance with
            this Policy.
          </li>
        </ul>
      </div>
      <Typography className="bheading">
        HOW WE STORE YOUR PERSONAL INFORMATION
      </Typography>
      <div className="body">
        We may store Personal Information using our own secure on-site servers
        or other internally hosted technology. Your Personal Information may
        also be stored by third parties, via cloud services or other technology,
        with whom the Company has contracted, to support the Company&apos;s business
        operations.
        <br />
        <br />
        These third parties do not use or have access to your Personal
        Information other than for cloud storage and retrieval, and the Company
        requires such parties to employ at least the same level of security that
        we use to protect your Personal Information.
      </div>
      <Typography className="bheading">
        <i>DO WE USE “COOKIES” ?</i>
      </Typography>
      <div className="body">
        <ul className="list-items">
          <li>
            We may track your preferences and activities on the Platform. “
            <b>Cookies</b>” are small data files transferred to your computer&apos;s
            hard-drive by a website, while using a web browser (if you allow).
            They keep a record of your activities on the Platform making your
            subsequent visits to the site more efficient. The Cookies may store
            a variety of information, including, the number of times that you
            access the Platform, registration information and the number of
            times that you view a particular page or other item on the Platform.
            The use of cookies is a common practice adopted by most major sites
            to better serve their clients. Most browsers are designed to accept
            cookies, but they can be easily modified to block cookies.
          </li>
          <li>
            By continuing the use of the Platform, you are agreeing to our use
            of cookies. If you do not agree to our use of cookie, you can block
            them in your browser setting, but you may lose some functionality on
            the Platform.
          </li>
        </ul>
      </div>
      <Typography className="bheading">CHILDREN</Typography>
      <div className="body">
        Out Platform is not designed for individuals under the age of eighteen
        (18) and we do not knowingly collect Personal Information from anyone
        under the age of eighteen (18). If you are under eighteen (18) years of
        age, you may browse our Platform, but please do not provide your
        Personal Information to us. For example, you cannot register. If we
        become aware that we have inadvertently received Personal Information
        from a visitor under the age of eighteen (18) on the Platform, we will
        delete the information from our records.
      </div>
      <Typography className="bheading">SECURITY</Typography>
      <div className="body">
        <ul className="list-items">
          <li className="item">
            We endeavour to protect the Personal Information against loss or
            theft, as well as unauthorized access, disclosure, copying, use or
            modification with security safeguards appropriate to the sensitivity
            of the Personal Information, regardless of the format in which it is
            held.
          </li>
          <li className="item">
            However, we shall not be liable to any Customers for any loss,
            damage (whether direct, indirect, consequential or incidental) or
            harm caused to the Customers due to the unauthorized access or
            misuse of the Personal Information by any third party.
          </li>
        </ul>
      </div>
      <Typography className="bheading">POLICY REVIEW</Typography>
      <div className="body">
        Please note that we review and may make changes to this Policy from time
        to time. When changes are made, the Policy link will include a notation
        “Revised (date).” indicating that you should review the new terms, which
        will be effective immediately upon posting on this page, with an updated
        effective date. By accessing the Platform after any changes have been
        made, you signify your agreement on a prospective basis to the modified
        Policy and any changes contained therein.
      </div>
      <Typography className="bheading">PRIVACY CONCERNS</Typography>
      <div className="body">
        If you are concerned about the handling of your Personal Information, or
        if you have any complaints or queries related to your Personal
        Information or our Policy, please contact:
        <br />
        <br />
        Email id : care@theskinluxury.in
      </div>
    </CustomPrivacyPolicy>
  );
};

export default PrivacyPolicy;
