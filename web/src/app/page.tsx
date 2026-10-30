import Link from "next/link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Ported from client/src/pages/LandingPage.js (image logo replaced by a wordmark;
// copy reframed from the old "find the next college prospect" to the CourtIQ analyst).
export default function LandingPage() {
  return (
    <section className="base-page">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ minHeight: "50vh", mt: "5vh" }}
        spacing={5}
      >
        <Grid item>
          <Typography variant="h1" textAlign="center">
            CourtIQ
          </Typography>
        </Grid>
        <Grid item>
          <Container>
            <Typography variant="subtitle1" textAlign="center">
              ASK ANYTHING. GROUNDED IN REAL NBA STATS.
            </Typography>
          </Container>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Button
                component={Link}
                href="/search"
                variant="contained"
                size="large"
                color="primary"
                sx={{ fontSize: "1em" }}
              >
                Try It
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="/about"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ fontSize: "1em" }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
