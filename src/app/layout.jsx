import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

export const metadata = {
  title: {
    default: "Bartika Lifeprint Academy",
    template: "%s | Bartika Lifeprint Academy",
  },
  description:
    "Bartika Lifeprint Academy- “from self-doubt to self-mastery”",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />
        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
