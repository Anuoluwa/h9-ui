import React, { useState } from "react";
import PriceWrapper from "../PriceWrapper";
import { FaCheckCircle } from "react-icons/fa";
import CreateSubscriptions from "../CreateSubscription";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import bgimg from "../../assets/images/bgimg.jpeg";

const ThreeTierPricing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  // const onLoginFormSubmit = (email, name, mobile) => {
  //   // e.preventDefault(e);
  //   console.log("data", email, name, mobile);
  // };

  return (
    <div>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="2xl">
            Plans that fit your need
          </Heading>
          <Text></Text>
          <Text fontSize="lg" color={"gray.900"}>
            Use our Euphoria Gold vouchers in any of our outlets. <br />{" "}
            <em></em>
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform=""
                  bg={useColorModeValue("yellow.300", "yellow.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="xs"
                  fontWeight="600"
                  rounded="xl"
                >
                  10% Discount
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Stack justifyContent="center" spacing={0.5} fontWeight="400">
                  <Text fontSize="2xl" as="s">
                    <span>&#8358;</span>100K
                  </Text>
                  <Text fontSize="md" fontWeight="500" color="gray.500">
                    Pay
                  </Text>
                  <Text fontSize="2xl" fontWeight="600" as="em">
                    <span>&#8358;</span>90K
                  </Text>
                </Stack>
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valid for 30 Days
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
                fontSize="sm"
                fontWeight="380"
              >
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />A voucher
                    of 100,000 naira for 90,000 naira
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free membership access to use the swimming pool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Exclusive invite to House9 events.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    fontSize="sm"
                    onClick={onOpen}
                    variant="solid"
                    px={10}
                  >
                    <text>Select Your Preferred Coupon</text>
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform=""
                  bg={useColorModeValue("yellow.300", "yellow.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="xs"
                  fontWeight="600"
                  rounded="xl"
                >
                  15% Discount
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Stack justifyContent="center" spacing={0.5} fontWeight="400">
                  <Text fontSize="2xl" as="s">
                    <span>&#8358;</span>500K
                  </Text>
                  <Text fontSize="md" fontWeight="500" color="gray.500">
                    Pay
                  </Text>
                  <Text fontSize="2xl" fontWeight="600" as="em">
                    <span>&#8358;</span>425K
                  </Text>
                </Stack>
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valid for 60 Days
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
                fontSize="sm"
                fontWeight="380"
              >
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />A voucher
                    of 500,000 naira for 425,000 naira
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free membership access to use the swimming pool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Exclusive invite to House9 events.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    fontSize="sm"
                    onClick={onOpen}
                    variant="solid"
                    px={10}
                  >
                    <text>Select Your Preferred Coupon</text>
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform=""
                  bg={useColorModeValue("yellow.300", "yellow.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="xs"
                  fontWeight="600"
                  rounded="xl"
                >
                  20% Discount
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Stack justifyContent="center" spacing={0.5} fontWeight="400">
                  <Text fontSize="2xl" as="s">
                    <span>&#8358;</span>1M
                  </Text>
                  <Text fontSize="md" fontWeight="500" color="gray.500">
                    Pay
                  </Text>
                  <Text fontSize="2xl" fontWeight="600" as="em">
                    <span>&#8358;</span>800K
                  </Text>
                </Stack>
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valid for 90 Days
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
                fontSize="sm"
                fontWeight="380"
              >
                <List spacing={3} textAlign="start" px={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />A voucher
                    of 1, 000,000 naira for 800,000 naira
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free membership access to use the swimming pool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Exclusive invite to House9 events.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    fontSize="sm"
                    onClick={onOpen}
                    variant="solid"
                    px={10}
                  >
                    <text>Select Your Preferred Coupon</text>
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </Stack>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are one step away to get your code</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <CreateSubscriptions handleClose={onClose} />
          </ModalBody>

          <ModalFooter>{/* <Button >Cancel</Button> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ThreeTierPricing;
