import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function SearchPage() {
  return (
    <section className="base-page">
      <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h1" gutterBottom>
          Try It
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          The player search box and grounded stats explorer are wired up in M1b,
          backed by the FastAPI <code>/players/search</code> endpoint.
        </Typography>
      </Container>
    </section>
  );
}
