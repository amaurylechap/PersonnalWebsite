import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{profile.name}</h3>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profile.social[0].href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.social[1].href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Legal & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

