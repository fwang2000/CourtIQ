"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Ported from client/src/components/Navigation/{NavigationBar,NavigationMenu}.js.
// next/link replaces react-router <Link>; the sweep-hover class moved to globals.css.

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "ABOUT", href: "/about" },
  { label: "TRY IT", href: "/search" },
  { label: "METHODOLOGY", href: "/methodology" },
  { label: "AUTHOR", href: "/author" },
];

export default function NavigationBar() {
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 4, pt: "1.5%" }}
      >
        <Grid item xs={3}>
          <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "20px" }}>
            <Link className="nav-link" href="/">
              CourtIQ
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
            {NAV_ITEMS.map((item) => (
              <Grid item key={item.href}>
                <Typography variant="h4" textAlign="center">
                  <Link className="nav-link" href={item.href}>
                    {item.label}
                  </Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
