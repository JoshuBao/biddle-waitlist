// src/WaitlistWidget.js

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './WaitlistWidget.css'; // Import your CSS file for styling

const WaitlistWidget = () => {
  useEffect(() => {
    // Load the waitlist API scripts
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    script.onload = () => {
      // Check if the window.getwaitlist object exists before calling init
      if (window.getwaitlist && typeof window.getwaitlist.init === 'function') {
        window.getwaitlist.init({
          waitlist_id: 10897,
          widget_type: 'WIDGET_1',
        });
      }
    };
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="waitlist-container">
      <Helmet>
        {/* Include the link and script tags within Helmet */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script
          src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <div id="getWaitlistContainer" data-waitlist_id="10897" data-widget_type="WIDGET_1"></div>
    </div>
  );
};

export default WaitlistWidget;
