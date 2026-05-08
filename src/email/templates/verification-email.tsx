import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { CSSProperties } from 'react';

export interface VerificationEmailProps {
  url: string;
  appName?: string;
  expiresIn?: string;
}

export const VerificationEmail = ({
  url,
  appName = 'Your app',
  expiresIn = '24 hours',
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirm your email address for {appName}</Preview>
    <Body style={styles.body}>
      <Container style={styles.container}>
        <Section style={styles.header}>
          <Text style={styles.brand}>{appName}</Text>
        </Section>

        <Section style={styles.card}>
          <Heading style={styles.heading}>Verify your email</Heading>
          <Text style={styles.text}>
            Thanks for signing up. Confirm this email address to finish setting
            up your account.
          </Text>

          <Button href={url} style={styles.button}>
            Verify email
          </Button>

          <Text style={styles.hint}>
            This link expires in {expiresIn}. If you did not create an account,
            you can safely ignore this email.
          </Text>

          <Hr style={styles.divider} />

          <Text style={styles.fallbackText}>
            If the button does not work, copy and paste this link into your
            browser:
          </Text>
          <Link href={url} style={styles.fallbackLink}>
            {url}
          </Link>
        </Section>

        <Text style={styles.footer}>
          You received this email because your address was used to create an
          account in {appName}.
        </Text>
      </Container>
    </Body>
  </Html>
);

VerificationEmail.PreviewProps = {
  url: 'https://example.com/auth/verify?token=example-token',
  appName: 'Winter Shop',
  expiresIn: '24 hours',
} satisfies VerificationEmailProps;

export default VerificationEmail;

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const styles = {
  body: {
    margin: 0,
    backgroundColor: '#f5f7fb',
    fontFamily,
  },
  container: {
    width: '100%',
    maxWidth: '560px',
    margin: '0 auto',
    padding: '32px 16px',
  },
  header: {
    padding: '0 0 16px',
  },
  brand: {
    margin: 0,
    color: '#111827',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '28px',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '32px',
  },
  heading: {
    margin: '0 0 16px',
    color: '#111827',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '36px',
  },
  text: {
    margin: '0 0 24px',
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#2563eb',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '20px',
    padding: '12px 20px',
    textDecoration: 'none',
  },
  hint: {
    margin: '24px 0 0',
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '22px',
  },
  divider: {
    margin: '28px 0',
    borderColor: '#e5e7eb',
  },
  fallbackText: {
    margin: '0 0 8px',
    color: '#6b7280',
    fontSize: '13px',
    lineHeight: '20px',
  },
  fallbackLink: {
    color: '#2563eb',
    fontSize: '13px',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    textDecoration: 'underline',
  },
  footer: {
    margin: '20px 0 0',
    color: '#9ca3af',
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'center',
  },
} satisfies Record<string, CSSProperties>;
