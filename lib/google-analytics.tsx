import * as React from 'react'
import Script from "next/script";
import { gaId } from "./config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', gaId, {
    page_path: url,
  })
}

const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics
