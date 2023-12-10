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

type QuoteRequestEmailProps = {
  fullName: string;
  phone: string;
  email: string;
  property: string;
  details: string;
};

const QuoteRequestEmail = ({
  fullName,
  phone,
  email,
  property,
  details,
}: QuoteRequestEmailProps) => {
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
               Quote Request
              </Heading>
              <Text>
                Name: {fullName}
              </Text>
              <Text>
                Phone:  {phone}
              </Text>
              <Text>Email: {email}</Text>
              <Text>Property: {property}</Text>
              <Hr />
              <Text>Details: {details}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default QuoteRequestEmail;
