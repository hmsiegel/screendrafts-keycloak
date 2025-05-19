import { Body, Container, Head, Html, Preview, Section, Hr } from "jsx-email";
import { PropsWithChildren, ReactNode } from "react";

const main = {
   backgroundColor: '#88add0',
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
   backgroundColor: "#ffffff",
   margin: "150px 0",
   padding: "20px 48px",
   borderRadius: "8px",
   boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
};

const footer = {
   color: "#777",
   fontSize: "12px",
   lineHeight: "16px",
   textAlign: "center" as const,
}
const hr = {
   border: "#e6ebf1",
   margin: "20px 10px",
}

export const EmailLayout = ({
   locale,
   children,
   preview,
}: PropsWithChildren<{ preview: ReactNode; locale: string }>) => {
   return (
      <Html lang={locale}>
         <Head />
         <Preview>{preview}</Preview>
         <Body style={main}>
            <Container style={container}>
               <Section>
                  {children}
               </Section>
            <Hr style={hr} />
            <div style={footer}>&copy; {new Date().getFullYear()} Screen Drafts. All rights reserved.</div>
            </Container>
         </Body>
      </Html>
   );
};
