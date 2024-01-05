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
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const QuoteRequestEmail = ({
  first_name,
  last_name,
  phone,
  email,
  service,
  message,
}: QuoteRequestEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Quote Request</Preview>
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
                Name: {first_name} {last_name}
              </Text>
              <Text>
                Phone:  {phone}
              </Text>
              <Text>Email: {email}</Text>
              <Text>Service: {service}</Text>
              <Hr />
              <Text>Message: {message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default QuoteRequestEmail;
