import Image from "next/image";
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Zoom from "react-reveal/Zoom";

export default function Footer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#0F0E17",
          height: "auto",
          display: "grid",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 13 }}
        >
          <Grid item xs={10} sm={4} md={8} mt={6} textAlign="center">
            <Zoom top>
              <Typography variant="h3" gutterBottom>
                It's time to start
                <br /> investing in yourself.
              </Typography>

              <Typography variant="subtitle1">
                Why? Financial literacy is critical, <br />
                yet it is not taught in today's educational system.
              </Typography>

              <br />

              <Button variant="contained" color="secondary">
                Take a test?
              </Button>
            </Zoom>
          </Grid>

          <Grid item xs={10} sm={4} md={4}>
            <Zoom top>
              <Image
                src="https://res.cloudinary.com/dfkd65uqz/image/upload/v1630025153/1_-_REBUILD_THE_ECONOMY_ygisvz.svg"
                alt="3D Shapes"
                width={450}
                height={350}
              />
            </Zoom>
          </Grid>
        </Grid>

        <Divider style={{ background: "white" }} variant="middle" />

        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          textAlign="center"
          p={4}
        >
          <Grid item xs={2} sm={4} md={2}>
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6">About</Typography>
            </Link>
          </Grid>

          <Grid item xs={2} sm={4} md={2}>
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6">Market</Typography>
            </Link>
          </Grid>

          <Grid item xs={2} sm={4} md={2}>
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6">Courses</Typography>
            </Link>
          </Grid>

          <Grid item xs={2} sm={4} md={2}>
            <Link href="/" underline="none" color="inherit">
              <Typography variant="h6">Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
