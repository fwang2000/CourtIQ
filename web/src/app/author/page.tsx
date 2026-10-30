import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AuthorPage() {
  return (
    <section className="base-page">
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h1" gutterBottom>
          Author
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Built by fzwang. Scaffold placeholder (M0).
        </Typography>
      </Container>
    </section>
  );
}
