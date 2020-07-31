import "../styles.css";
import { DefaultSeo } from "next-seo";

const title = "John Letey";
const description = "Software Engineer and Designer";
const SEO = {
  title,
  description,
  canonical: "https://johnletey.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://johnletey.vercel.app",
    title,
    description,
    images: [
      {
        url: "/og.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@johnletey",
    site: "@johnletey",
    cardType: "summary_large_image",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
