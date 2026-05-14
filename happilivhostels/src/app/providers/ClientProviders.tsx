'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Toaster } from 'react-hot-toast';

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LfRuoYsAAAAAN9Gb_83OiLI_TEJ6Ga119DNi-Ba">
            <Toaster position="top-right" />
            {children}
        </GoogleReCaptchaProvider>
    );
}