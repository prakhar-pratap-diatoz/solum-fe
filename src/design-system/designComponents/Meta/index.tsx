import { Helmet } from "react-helmet";
import workforce from "./workforce.svg";

const Meta = ({
  title,
  description,
  orgImage,
  domainName,
}: {
  title?: string;
  description?: string;
  orgImage?: string;
  domainName?: string;
}) => {
  const showDomainName = () => {
    let domainTitle = "Workforce";
    // const data = domainName?.split(".", 1)[0];
    // if (data) {
    //   domainTitle = data?.charAt(0)?.toUpperCase() + data?.slice(1);
    // } else {
    //   domainTitle = "Workforce";
    // }
    return domainTitle;
  };
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href={orgImage ? orgImage : workforce} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href={orgImage ? orgImage : workforce} />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>{`${showDomainName()} ${title ? "-" : ""} ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="e2eHiring" />
      <meta
        name="keywords"
        content="e2ehiring, Jobs, hiring, recruit, recruitment, posting jobs"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      {/* Open Graph meta tags
      <meta property="og:title" content="Your Open Graph Title" />
      <meta property="og:description" content="Your Open Graph Description" />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta property="og:url" content="https://example.com/page" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Your Website Name" /> */}

      {/* Twitter Card meta tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Twitter Card Title" />
      <meta
        name="twitter:description"
        content="Your Twitter Card Description"
      />
      <meta name="twitter:image" content="https://example.com/image.jpg" />
      <meta name="twitter:site" content="@YourTwitterHandle" /> */}

      {/* Apple-specific meta tags */}
      {/* <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Your App Title" />
      <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" /> */}

      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

Meta.defaultProps = {
  keywords: "",
  description:
    "e2eHiring Job Posting and recruitment platform hire Quality candidates. Search Best Talents with AI-driven technology. best candidate sourcing platform.",
};

export default Meta;
