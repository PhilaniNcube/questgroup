
import {
  Html,
  Body,
  Text,
  Head,
  Heading,
  Hr,
  Link,
  Button,
  Container,
  Img,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";


type ContactFormEmailProps = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactFormEmail = ({
  firstName,
  lastName,
  email,
  message
}:ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Body>
          <Container>
            <Section>
              <Heading>
                Hi, you have a new submission from the contact form on the Waterquest website
              </Heading>
              <Text>Name: {firstName} {lastName}</Text>
              <Text>Email: {email}</Text>
              <Hr />
              <Text>Message: {message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ContactFormEmail;
