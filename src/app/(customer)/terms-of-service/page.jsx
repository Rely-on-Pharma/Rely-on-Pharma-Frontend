"use client";
import { colors } from "@/constants/colors.js";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { termsOfService } from "@/constants/data/TermsOfService";

const CustomTermsofService = styled(Box)(({ theme }) => ({
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
      padding: "0vh 4vw",
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

const TermsofService = () => {
  return (
    <CustomTermsofService>
      <Typography className="heading" textAlign={"center"}>
        Terms of Service
      </Typography>
      <Typography className="date">
        Revised Date: {termsOfService[0]}
      </Typography>
      <Typography className="subheading" textAlign={"justify"}>
        {termsOfService[1]}
      </Typography>
      <div className="body">{termsOfService[2]}</div>
      <Typography className="bheading">WEBSITE</Typography>
      <div className="body">
        <u>Your Account</u> : You may create and hold one user account (“
        <b>Account</b>”) only. You will be responsible for maintaining
        confidentiality of your account, password, and restricting access to
        your computer, and you hereby accept responsibility for all activities
        that occur under your Account. You acknowledge that the information you
        provide, in any manner whatsoever, are not confidential or proprietary
        and does not infringe any rights of a third party in whatsoever nature.
        Each Account is non-transferrable and may not be sold, traded, combined,
        or otherwise shared with any other person.
        <br />
        <br /> If you are accessing, browsing and using the Website on someone
        else’s behalf; you represent that you have the authority to bind that
        person to all the T&C herein. In the event that the person refuses to be
        bound as the principal to the T&C, you agree to accept liability for any
        harm caused by any wrongful use of the Website resulting from such
        access or use of the Website in whatsoever nature.
        <br />
        <br /> If you know or have reasons to believe that the security of your
        Account has been breached, you should contact us immediately at the
        ‘Contact Information’ provided below. If we have found a breach or
        suspected breach of the security of your Account, we may require you to
        change your password, temporarily or permanently block or suspend your
        account without any liability to the Company.
        <br />
        <br /> We reserve the right to refuse service and/or terminate accounts
        without prior notice if the T&C are violated or if we decide, in our
        sole discretion, that it would be in the Company’s best interests to do
        so. You are solely responsible for all contents that you upload, post,
        email or otherwise transmit via the Website. The information provided to
        us shall be maintained by us in accordance with our Privacy Policy.
        <br />
        <br /> <u>Content; Intellectual Property; Third Party Links</u>: In
        addition to making the Products available, the Website also offers
        information and marketing materials. The Website also offers
        information, both directly and through indirect links to third-party
        websites about nutritional and dietary supplements. The Company does not
        always create such information and the content published on the Website;
        instead, the information and content are often gathered from other
        sources. The Company does not endorse any such information or content
        and the Company expressly disclaims any and all liability in connection
        with the same. The Company is not responsible or liable for the
        information or the content or any damage or loss that may result from
        your access to or reliance on such information or content. To the extent
        that the Company does create the content on this Website, such content
        is protected by intellectual property laws of India. Any unauthorized
        use of the material may violate copyright, trademark, and/or other laws.
        You acknowledge that your use of the content on this Website is for
        personal and non-commercial use.
        <br />
        <br /> We respect the intellectual property of others. In case you feel
        that your work has been copied in a way that constitutes copyright
        infringement, you can write to us at <i>care@vayortricks.com</i>
        <br />
        <br />
        Any links to third-party websites are provided solely as a convenience
        to you. The Company does not endorse, affiliate, sponsor or recommend
        any such third-party websites. The Company is not responsible or liable
        for the content of or any damage or loss that may result from your
        access to or reliance on these third-party websites. You should always
        read the terms and conditions and privacy policy of a third-party
        website before using it. If you access or use such third-party websites,
        you do so at your own risk.
        <br />
        <br /> <u>Use of Website</u>: The Company is not responsible for any
        damages resulting from use of the Website by anyone. You will not use
        the Website for any illegal purposes. You will
        <br />
        <br />
        <ol type="a" className="list-items">
          <li>
            abide by all applicable local, state, national, and international
            laws and regulations in your use of the Website (including laws
            regarding intellectual property)
          </li>
          <li>
            not interfere with or disrupt the use and enjoyment of the Website
            by other users,
          </li>
          <li>not resell material on the Website,</li>
          <li>
            not engage, directly or indirectly, in transmission of “spam”, chain
            letters, junk mail or any other type of unsolicited communication,
            and
          </li>
          <li>
            not defame, harass, abuse, or disrupt other users of the Website
          </li>
          <li>
            not to do or attempt to do any action which is grossly harmful,
            harassing, blasphemous defamatory, obscene, pornographic,
            paedophilic, libellous, invasive of another's privacy, hateful, or
            racially, ethnically objectionable, disparaging, relating or
            encouraging money laundering or gambling, trolling, propaganda or
            otherwise unlawful in any manner whatever.
          </li>
        </ol>
        <br />
        <u>License</u>: By using this Website, you are granted a limited,
        non-exclusive, non-transferable right to use the content and materials
        on the Website in connection with your personal, non-commercial use of
        the Website. You may not copy, reproduce, transmit, distribute, or
        create derivative works of such content or information without express
        written authorization from the Company or the applicable third party (if
        third party content is at issue).
        <br />
        <br /> <u>Posting</u>: By posting, storing, or transmitting any content
        on the Website, you hereby grant the Company a perpetual, worldwide,
        non-exclusive, royalty-free, assignable, right and license to use, copy,
        display, perform, create derivative works from, distribute, have
        distributed, transmit and assign such content in any form, in all media
        now known or hereinafter created, anywhere in the world, subject to the
        Company’s privacy policy. The Company does not have the ability to
        control the nature of the user-generated content offered through the
        Website. You are solely responsible for your interactions with other
        users of the Website and any content you post. The Company is not liable
        for any damage or harm resulting from any posts by or interactions
        between the users. The Company reserves the right, but has no
        obligation, to monitor interactions between and among users of the
        Website and to remove any content the Company deems objectionable. Under
        no circumstances will the Company be liable in any way for any user
        generated content, including without limitation, for any errors or
        omissions in such content or for any loss or damage of any kind incurred
        by you as a result of the use of any such user generated content
        transmitted, uploaded, posted, e-mailed or otherwise made available via
        the Website. You hereby waive all rights to any claims against the
        Company for any alleged or actual infringements of any proprietary
        rights, rights of privacy and publicity, moral rights, and rights of
        attribution in connection with such user generated content.
        <br />
        <br />
        <u>Site Security</u>:You are prohibited from violating or attempting to
        violate the security of the Website, including, without limitation,
        <br />
        <br />
        <ol type="1" className="list-items">
          <li>
            accessing data not intended for you or logging onto a server or an
            account which you are not authorized to access;
          </li>
          <li>
            attempting to probe, scan or test the vulnerability of a system or
            network or to breach security or authentication measures without
            proper authorization;
          </li>
          <li>
            attempting to interfere with service to any other user, host or
            network, including, without limitation, via means of submitting a
            virus to the Site, overloading, "flooding," "spamming," "mail
            bombing" or "crashing"
          </li>
          <li>
            sending unsolicited email, including promotions and/or advertising
            of products or services
          </li>
          <li>
            forging any header or any part of the header information in any
            email or newsgroup posting. Violations of system or network security
            may result in civil or criminal liability
          </li>
          <li>
            threatens the unity, integrity, defence, security or sovereignty of
            India, public order or causes incitement to the commission of any
            cognizable offence or prevents investigation of any offence.
          </li>
        </ol>
        <br />
        <u>Payment Method</u>: The Payments for the Products available on the
        Website may be made by UPI
        <br />
        <br />
        <u>Pricing and Availability</u>: The Prices and availability of the
        Products, offers and services provided or offered on the Website are
        subject to change without prior notice and at the sole discretion of the
        Company.
        <br />
        <br />
      </div>
      <Typography className="bheading">DISCLAIMER OF WARRANTIES</Typography>
      <div className="body">
        Your use of the Website and/or Products are at your sole risk. The
        Website and the Products are offered on an “as is” and “as available”
        basis. The Company expressly disclaims all warranties of any kind,
        whether express or implied, including, but not limited to, implied
        warranties of merchantability, fitness for a particular purpose and
        non-infringement with respect to the Products or Website content, or any
        reliance upon or use of the Website content or Products.
        <br />
        <br /> Without limiting the generality of the foregoing, the Company
        makes no warranty:
        <br />
        <br />
        <ol type="1" className="list-items">
          <li>
            that the information provided on this Website is accurate, reliable,
            complete, or timely;
          </li>
          <li>
            that the links to third-party websites are to information that is
            accurate, reliable, complete, or timely;
          </li>
          <li>
            no advice or information, whether oral or written, obtained by you
            from this Website will create any warranty not expressly stated
            herein;
          </li>
          <li>
            as to the results that may be obtained from the use of the Products
            or that defects in the Products will be corrected; and
          </li>
          <li>
            regarding any Products purchased or obtained through the Website.
          </li>
        </ol>
        <br />
        The inclusion of any Products or offers on the Website at a particular
        time does not imply or warrant that the Products or offers will be
        available at any time.
        <br />
        <br /> The Company shall have the right, at any time, to change or
        discontinue any aspect or feature of the Website, including, but not
        limited to, content, hours of availability and equipment needed for
        access or use. Further, the Website may discontinue disseminating any
        portion of information or category of information. The Company does not
        accept any responsibility and will not be liable for any loss or damage
        whatsoever arising out of or in connection with any ability/inability to
        access or to use the Website.
      </div>
      <Typography className="bheading">LIMITATION of LIABILITY</Typography>
      <div className="body">
        The Company takes no liability or exclusive remedy, in law, in equity,
        or otherwise, with respect to the Website content and Products and/or
        for any breach of this T&C. The Company will not be liable for any
        direct, indirect, incidental, special or consequential damages or loss
        in connection with this T&C or the Products in any manner, including
        liabilities resulting from <br /> <br />
        <ol type="a" className="list-items">
          <li>
            the use or the inability to use the Website content or Products or
            allied services;
          </li>
          <li>the cost of procuring substitute the Products or content;</li>
          <li>
            any Products purchased or obtained or transactions entered into
            through the Website; or
          </li>
          <li>
            any lost profits you allege, even if we have been advised of the
            possibility of such damages and in no event shall our maximum
            aggregate liability exceed.
          </li>
        </ol>
        You agree that, to the fullest extent permitted by applicable law,
        neither the Company nor our affiliates, partners, or licensors will be
        responsible or liable (whether in contract, tort (including negligence)
        or otherwise) under any circumstances for any
        <br />
        <br />
        <ol type="a" className="list-items">
          <li>interruption of business;</li>
          <li>access delays or access interruptions to the Website; </li>
          <li>
            data non-delivery, loss, theft, mis-delivery, corruption,
            destruction or other modification;
          </li>
          <li>
            loss or damages of any sort incurred as a result of dealings with or
            the presence of third party website links on the Website;
          </li>
          <li>
            viruses, system failures or malfunctions which may occur in
            connection with your use of the Website, including during hyperlink;
          </li>
          <li>any inaccuracies or omissions in content; or</li>
          <li>events beyond the reasonable control of the Company.</li>
        </ol>
        <br />
        We make no representations or warranties that defects or errors will be
        corrected. This disclaimer constitutes an essential part of this T&C.
        <br />
        <br />
        Some jurisdictions do not allow the limitation or exclusion of liability
        for incidental or consequential damages so some of the above limitations
        may not apply to you.
      </div>
      <Typography className="bheading">INDEMNIFICATION</Typography>
      <div className="body">
        You will release, indemnify, defend and hold harmless the Company, and
        any of its contractors, agents, employees, officers, directors,
        shareholders, affiliates and assigns from all liabilities, claims,
        damages, costs and expenses, including reasonable attorney’s fees and
        expenses, of third parties relating to or arising out of: (a) this T&C
        or the breach of your warranties, representations and obligations under
        this T&C; (b) the Website content or your use of the Website content;
        (c) the Products or your use of the Products (including trial products);
        (d) any intellectual property or other proprietary right of any person
        or entity; (e) your violation of any provision of this T&C; or (f) any
        information or data you supplied to the Company. When the Company is
        threatened with suit or sued by a third party, the Company may seek
        written assurances from you concerning your promise to indemnify the
        Company; your failure to provide such assurances may be considered by
        the Company to be a material breach of this T&C. The Company will have
        the right to participate in any defense by you of a third-party claim
        related to your use of any of the Website content or Products, with
        counsel of the Company choice at its expense. The Company will
        reasonably cooperate in any defense by you of a third-party claim at
        your request and expense. You will have sole responsibility to defend
        the Company against any claim, but you must receive the Company prior
        written consent regarding any related settlement. The terms of this
        provision will survive any termination or cancellation of this T&C or
        your use of the Website or the Products.
      </div>
      <Typography className="bheading">PRIVACY</Typography>
      <div className="body">
        The Company believes strongly in protecting user privacy and providing
        You with notice of the Company’s use of data. Please refer to the
        Company privacy policy, incorporated by reference herein, that is
        uploaded on the Website.
      </div>
      <Typography className="bheading">GENERAL</Typography>
      <div className="body">
        <u>Force Majeure</u>:The Company will not be deemed in default hereunder
        or held responsible for any cessation, interruption or delay in the
        performance of its obligations hereunder due to earthquake, storm,
        natural disaster, act of God, war, terrorism, armed conflict, labour
        strike, lockout, or boycott, any acts of nature labour disputes, floods,
        lightning, severe weather, shortages of materials, rationing, pandemic
        or epidemic, inducement of any virus, Trojan or other disruptive
        mechanisms, any event of hacking or illegal usage of the Website,
        utility or communication failures, revolution, civil commotion, acts of
        public enemies, blockade, embargo or any law, order, proclamation,
        regulation, ordinance, demand or requirement having legal effect of any
        government or any judicial authority or representative of any such
        government, or any other act whatsoever, whether similar or dissimilar
        to those referred to in this clause beyond our reasonable control.
        Further if Force Majeure event takes place that affects the performance
        of our obligations under these T&C our obligations under these T&C shall
        be suspended for the duration of Force Majeure event.
        <br />
        <br />
        <u>Cessation of Operation</u>: The Company may at any time, in its sole
        discretion and without advance notice to You, cease operation of the
        Website and distribution of the Products.
        <br />
        <br />
        <u>Entire Agreement</u>:This T&C comprises the entire agreement between
        you and the Company and supersedes any prior agreements pertaining to
        the subject matter contained herein.
        <br />
        <br />
        <u>Effect of Waiver:</u>:The failure of the Company to exercise or
        enforce any right or provision of this T&C will not constitute a waiver
        of such right or provision. If any provision of this T&C is found by a
        court of competent jurisdiction to be invalid, the parties nevertheless
        agree that the court should endeavour to give effect to the parties’
        intentions as reflected in such provision, and the other provisions of
        this T&C remain in full force and effect.
        <br />
        <br />
        <u>Governing Law and Jurisdiction</u>:This T&C shall be construed in
        accordance with the applicable laws of India and will be governed by the
        laws of the state of Maharashtra without regard to its conflict of law
        principles to the contrary. Neither you nor the Company will commence or
        prosecute any suit, proceeding or claim to enforce the provisions of
        this T&C, to recover damages for breach of or default of this T&C, or
        otherwise arising under or by reason of this T&C, other than in courts
        located in State of Maharashtra. By using this Website or ordering
        Products, you consent to the jurisdiction and venue of such courts in
        connection with any action, suit, proceeding or claim arising under or
        by reason of this T&C.
        <br />
        <br />
        <u>Termination</u>:The Company reserves the right to terminate your
        access to the Website if it reasonably believes, in its sole discretion,
        that you have breached any of the terms of this T&C. Following
        termination, you will not be permitted to use the Website and the
        Company may, in its sole discretion and without advance notice to you,
        cancel any outstanding orders for Products. If your access to the
        Website is terminated, the Company reserves the right to exercise
        whatever means it deems necessary to prevent the unauthorized access of
        the Website. This T&C will survive indefinitely, unless and until the
        Company chooses, in its sole discretion and without advance notice to
        You, to terminate it.
        <br />
        <br />
        <u>Domestic Use</u>:The Company makes no representation that the Website
        or Products are appropriate or available for use in locations outside
        India. The users who access the Website from outside India do so at
        their own risk and initiative and must bear all responsibility for
        compliance with any applicable local laws.
        <br />
        <br />
        <u>Assignment</u>:You may not assign your rights and obligations under
        this T&C to anyone. The Company may assign its rights and obligations
        under this T&C in its sole discretion and without advance notice to you.
        <br />
        <br />
        By using this Website or ordering Products from this Website, you agree
        to be bound by this T&C.
        <br />
        <br />
        <u>Survival</u>:If any provision or provisions of these T&C shall be
        held to be invalid, illegal, or unenforceable, the validity, legality
        and enforceability of the remaining provisions shall remain in full
        force and effect.
        <br />
        <br />
        <u>Contact Us</u>: Please contact us for any questions or comments
        (including all inquiries unrelated to copyright infringement) regarding
        the Products or the Website.
        <br />
        <br />
        Customer Service Desk:
        <br />
        <br />
        Email : care@theskinluxury.com
      </div>
    </CustomTermsofService>
  );
};

export default TermsofService;
