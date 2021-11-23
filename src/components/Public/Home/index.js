import * as React from "react";
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import {
  Container,
  Grid,
} from "@mui/material";

import "index.css";

const Home = () => {

  // Report config useState hook
  // Values for properties like embedUrl, accessToken and settings will be set on click of buttons below
  const [sampleReportConfig, setReportConfig] = React.useState({
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  });

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