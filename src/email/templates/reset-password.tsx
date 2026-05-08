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

export interface ResetPasswordProps {
  url: string;
  appName?: string;
  expiresIn?: string;
}

export const ResetPassword = ({
  url,
  appName = 'Your app',
  expiresIn = '1 hour',
}: ResetPasswordProps) => (
  <Html>
    <Head />
    <Preview>Reset your password for {appName}</Preview>
    <Body style={styles.body}>
      <Container style={styles.container}>
        <Section style={styles.header}>
          <Text style={styles.brand}>{appName}</Text>
        </Section>

        <Section style={styles.card}>
          <Heading style={styles.heading}>Reset your password</Heading>
          <Text style={styles.text}>
            We received a request to reset the password for your account. Use
            the button below to choose a new password.
          </Text>

          <Button href={url} style={styles.button}>
            Reset password
          </Button>

          <Text style={styles.hint}>
            This link expires in {expiresIn}. If you did not request a password
            reset, you can safely ignore this email.
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
          You received this email because a password reset was requested for
          your {appName} account.
        </Text>
      </Container>
    </Body>
  </Html>
);

ResetPassword.PreviewProps = {
  url: 'https://example.com/auth/reset-password?token=example-token',
  appName: 'Winter Shop',
  expiresIn: '1 hour',
} satisfies ResetPasswordProps;

export default ResetPassword;

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
