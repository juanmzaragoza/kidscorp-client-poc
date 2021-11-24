import * as React from "react";
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import {
  Container,
  Grid,
} from "@mui/material";

import "./index.css";

const Home = () => {

  // API end-point url to get embed config for a sample report
  const sampleReportUrl = 'https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport';

  // Report config useState hook
  // Values for properties like embedUrl, accessToken and settings will be set on click of buttons below
  const [sampleReportConfig, setReportConfig] = React.useState({
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  });

  React.useEffect(() => {
    const getConfig = async () => {
      // Fetch sample report's embed config
      const reportConfigResponse = await fetch(sampleReportUrl);

      if (!reportConfigResponse.ok) {
        console.error(`Failed to fetch config for report. Status: ${ reportConfigResponse.status } ${ reportConfigResponse.statusText }`);
        return;
      }

      const reportConfig = await reportConfigResponse.json();

      // Update display message
      console.log('The access token is successfully set. Loading the Power BI report');

      // Set the fetched embedUrl and embedToken in the report config
      setReportConfig({
        ...sampleReportConfig,
        embedUrl: reportConfig.EmbedUrl,
        accessToken: reportConfig.EmbedToken.Token
      });
    };
    getConfig();
  },[sampleReportConfig]);

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <PowerBIEmbed
            cssClassName="report-style-class"
            embedConfig={sampleReportConfig}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;