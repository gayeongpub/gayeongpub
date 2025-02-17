import { Box, Container, Typography } from "@mui/material";
// import CompGsap from "../components/Gsap";

export default function Page() {
  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          sx={{ my: 4, p: 3, bgcolor: "background.paper", borderRadius: 2 }}
          className="section"
        >
          <Typography variant="h4">Section {index + 1}</Typography>
          <Typography variant="body1">This is an example section.</Typography>
        </Box>
      ))}
      {/* <CompGsap /> */}
    </Container>
  );
}
