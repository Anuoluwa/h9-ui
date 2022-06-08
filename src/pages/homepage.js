import { Container, Box } from "@chakra-ui/react";
import MainNav from "../components/MainNav";
import ThreeTierPricing from "../components/ThreeTierPricing";
import Footer from "../components/Footer";
import styles from "../components/ThreeTierPricing/index.module.scss";

const Homepage = () => {
  return (
    <Box>
      <MainNav />
      <Box className={styles.bg}>
        <Container maxW='container.sm'>
          <ThreeTierPricing />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
