import { Button, Container, Hr, Img, Section, Text } from "jsx-email";
import { EmailLayout } from "../layout";
import { createVariablesHelper } from "keycloakify-emails/variables";

interface ScreenDraftsInvitationEmailProps {
   userName: string;
   locale: string;
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
} as ScreenDraftsInvitationEmailProps;

export const templateName = "Invitation Email";

const { exp } = createVariablesHelper("org-invite.ftl");

const baseUrl = import.meta.isJsxEmailPreview ? "/assets" : "${url.resourcesUrl}"

export const Template = ({ userName, locale }: ScreenDraftsInvitationEmailProps) => (
   <EmailLayout preview={`Welcome to Screen Drafts.`} locale={locale}>
      <Container>
         <Img src={`${baseUrl}/screen-drafts.jpg`} alt="Screen Drafts Logo" width="100" height="100" />
      </Container>
      <Hr style={hr} />
      <Text style={paragraph}>
         Hello {userName},
      </Text>
      <Text style={paragraph}>
         Welcome to Screen Drafts! You've been invited to join our community.
      </Text>
      <Text style={paragraph}>
         Click the button below to verify your email address and complete your registration.
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
   </EmailLayout>
);