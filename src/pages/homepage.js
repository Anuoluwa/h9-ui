import { Container, Box } from "@chakra-ui/react";
import MainNav from "../components/MainNav";
import ThreeTierPricing from "../components/ThreeTierPricing";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <Box>
      <MainNav />
      <Container>
        <ThreeTierPricing />
      </Container>
      <Footer />
    </Box>
  );
};

export default Homepage;
