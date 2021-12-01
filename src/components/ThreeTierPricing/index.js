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

const ThreeTierPricing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  // const onLoginFormSubmit = (email, name, mobile) => {
  //   // e.preventDefault(e);
  //   console.log("data", email, name, mobile);
  // };

  return (
    <>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Plans that fit your need
          </Heading>
          <Text></Text>
          <Text fontSize="lg" color={"gray.500"}>
            Use our Euphoria Gold vouchers in any outlet. <br />{" "}
            <em>No debit card needed.</em>
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
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valids for 30 Days
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    <span>&#8358;</span>
                  </Text>
                  <Text fontSize="4xl" fontWeight="900">
                    90K
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /100K
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={6}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={8}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />A voucher
                    of 100,000 naira for 90,000 naira.
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
                    colorScheme="red"
                    variant="outline"
                    fontSize="sm"
                    onClick={onOpen}
                  >
                    Select Your Preferred Coupon
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
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valids for 60 Days
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    <span>&#8358;</span>
                  </Text>
                  <Text fontSize="4xl" fontWeight="900">
                    425K
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /500K
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={10}>
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
                    colorScheme="red"
                    variant="outline"
                    fontSize="sm"
                    onClick={onOpen}
                  >
                    Select Your Preferred Coupon
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
                  // textTransform="uppercase"
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
                <Text fontWeight="500" fontSize="sm" color="red.500">
                  Valids for 90 Days
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    <span>&#8358;</span>
                  </Text>
                  <Text fontSize="4xl" fontWeight="900">
                    800K
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /1M
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={10}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="yellow.500" />A voucher
                    of 1,000,000 naira for 800,000 naira
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
                    colorScheme="red"
                    variant="outline"
                    fontSize="sm"
                    onClick={onOpen}
                  >
                    Select Your Preferred Coupon
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
    </>
  );
};

export default ThreeTierPricing;
