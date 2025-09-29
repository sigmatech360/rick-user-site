import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = ({
  title = "HIS-OC | Homeless Services in Orange County | HIS-OC Transitional Housing & Support",
  description = "Homeless Intervention Services of Orange County (HIS-OC) provides transitional housing, case management, and support for homeless families. Learn how to volunteer, donate, or get help today.",
  keywords = "homeless services Orange County, Orange County homeless shelter, transitional housing Orange County, family shelter Orange County, nonprofit homelessness programs OC, HIS-OC homeless services, support for homeless families Orange County, affordable housing assistance Orange County, emergency shelter Orange County, case management for homelessness OC, youth homelessness programs Orange County, donate to homeless shelter Orange County, volunteer homeless shelter Orange County, nonprofit donations Orange County, charity helping homeless families OC, ways to help homeless Orange County, ending homelessness in Orange County, homeless prevention services Orange County, housing first Orange County, community support for homelessness OC",
  baseUrl = "https://his-oc.org/",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={baseUrl} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default ReactHelmet;
