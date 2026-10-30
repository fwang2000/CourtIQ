import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AboutPage() {
  return (
    <section className="base-page">
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          CourtIQ is an AI basketball analyst. You ask natural-language questions
          about NBA players and teams; the app answers with statistics computed in
          code and traceable to their source season — never numbers invented by a
          language model.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          This page is a scaffold placeholder (M0). The real content lands with the
          interactive client in M-FE1.
        </Typography>
      </Container>
    </section>
  );
}
