import { profile } from "@/data/profile";

export const metadata = {
  title: "Legal & Privacy — Amaury Lechapelain",
  description: "Legal information and privacy policy",
};

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Legal & Privacy</h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Imprint</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">Name:</strong> {profile.name}
            </p>
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              <a
                href={profile.social[0].href}
                className="text-primary hover:underline"
              >
                {profile.email}
              </a>
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong>{" "}
              <a
                href={profile.social[1].href}
                className="text-primary hover:underline"
              >
                {profile.phone}
              </a>
            </p>
            <p>
              <strong className="text-foreground">Location:</strong>{" "}
              {profile.location}
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Privacy Policy</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This website respects your privacy. This privacy policy explains
              how we collect, use, and protect your personal information.
            </p>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Data Collection
              </h3>
              <p>
                We collect information you provide directly to us, such as when
                you fill out the contact form. This may include your name, email
                address, and message content.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Analytics
              </h3>
              <p>
                This website uses Plausible Analytics, a privacy-focused
                analytics service that does not use cookies and complies with
                GDPR, CCPA, and PECR. No personal data is collected.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Contact Form
              </h3>
              <p>
                When you submit the contact form, your information is used solely
                to respond to your inquiry. We do not share this information
                with third parties.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Your Rights
              </h3>
              <p>
                You have the right to access, correct, or delete your personal
                information. If you have any questions or requests, please
                contact us using the information provided above.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Changes to This Policy
              </h3>
              <p>
                We may update this privacy policy from time to time. The most
                recent version will always be available on this page.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  );
}

