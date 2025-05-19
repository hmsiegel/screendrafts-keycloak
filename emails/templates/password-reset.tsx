import { Button, Container, Hr, Img, Section, Text } from "jsx-email";
import { EmailLayout } from "../layout";

interface ScreenDraftsPasswordResetEmailProps {
   userName: string;
   locale: string;
   resetPasswordLink: string;
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
   resetPasswordLink: "https://example.com/reset-password",
} as ScreenDraftsPasswordResetEmailProps;

export const templateName = "Password Reset";

const baseUrl = import.meta.isJsxEmailPreview ? "/assets" : "${url.resourcesUrl}"

export const Template = ({ userName, locale, resetPasswordLink }: ScreenDraftsPasswordResetEmailProps) => (
   <EmailLayout preview={`Screen Drafts reset your password`} locale={locale}>
      <Container>
         <Img src={`${baseUrl}/screen-drafts.jpg`} alt="Screen Drafts Logo" width="100" height="100" />
      </Container>
      <Hr style={hr} />
      <Text style={paragraph}>
         Hello {userName},
      </Text>
      <Text style={paragraph}>
          We received a request to reset your password for your Screen Drafts account.
          If this was you, please click the button below to reset your password.
      </Text>
      <Button
         text-align="center"
         align="center"
         height={50}
         width={200}
         borderRadius={6}
         backgroundColor="#1e448b"
         textColor="#ffffff"
         href={resetPasswordLink}>Reset Password</Button>
      <Text style={paragraph}>
          If you did not request a password reset, please ignore this email. Your password will remain unchanged.
      </Text>
   </EmailLayout>
);