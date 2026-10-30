import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function MethodologyPage() {
  return (
    <section className="base-page">
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h1" gutterBottom>
          Methodology
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          How stats are sourced (nba_api → SQLite cache), how metrics are computed,
          and how player archetypes are derived will be documented here. Scaffold
          placeholder (M0).
        </Typography>
      </Container>
    </section>
  );
}
