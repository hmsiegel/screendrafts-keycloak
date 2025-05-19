import { Button, Container, Hr, Img, Section, Text } from "jsx-email";
import { EmailLayout } from "../layout";
import { createVariablesHelper } from "keycloakify-emails/variables";

interface ScreenDraftsWelcomeEmailProps {
   userName: string;
   locale: string;
   steps?: {
      id: number;
      Description: React.ReactNode;
   }[];
   links?: string[];
}

const paragraph = {
   color: "#777",
   fontSize: "16px",
   lineHeight: "24px",
   textAlign: "left" as const,
};

const hr = {
   border: "#e6ebf1",
   margin: "20px 10px",
}

export const previewProps = {
   userName: "Clay Keller",
   locale: "en",
   steps: [
      {
         id: 1,
         Description: (
            <li className="mb-20" key={1}>
               <strong>Browse past drafts.</strong> There have been over 300 drafts conducted since 2018, and
               each one has been documented with the G.M.'s, draft picks, and blessings used.
            </li>
         )
      },
      {
         id: 2,
         Description: (
            <li className="mb-20" key={1}>
               <strong>Request to become a drafter.</strong> To participate in a draft, you must be added
               as a drafter by an administrator.
            </li>
         )
      },
      {
         id: 3,
         Description: (
            <li className="mb-20" key={1}>
               <strong>Create your own draft. (Coming Soon)</strong> You've listened to the show, now it's time to
               create your own draft! You can create a draft and invite your friends to join.
            </li>
         )
      }
   ]
} as ScreenDraftsWelcomeEmailProps;

export const templateName = "Welcome Email";

const { exp } = createVariablesHelper("email-verification.ftl");

const baseUrl = import.meta.isJsxEmailPreview ? "/assets" : "${url.resourcesUrl}"

export const Template = ({ userName, locale, steps }: ScreenDraftsWelcomeEmailProps) => (
   <EmailLayout preview={`Welcome to Screen Drafts.`} locale={locale}>
      <Container>
         <Img src={`${baseUrl}/screen-drafts.jpg`} alt="Screen Drafts Logo" width="100" height="100" />
      </Container>
      <Hr style={hr} />
      <Text style={paragraph}>
         Hello {userName},
      </Text>
      <Text style={paragraph}>
         Welcome to Screen Drafts! The web app where experts and enthusiasts
         competitively collaborate in the creation of screen-centric best-of lists.
      </Text>
      <Text style={paragraph}>
         To get started, please verify your email address by clicking the button below:
      </Text>
      <Button
         text-align="center"
         align="center"
         height={50}
         width={200}
         borderRadius={6}
         backgroundColor="#1e448b"
         textColor="#ffffff"
         href={exp("link")}>Verify Email</Button>
      <Hr style={hr} />
      <Text style={paragraph}>
         Once verified you can:
      </Text>
      <ul>{steps?.map(({ Description }) => Description )}</ul>
   </EmailLayout>
);