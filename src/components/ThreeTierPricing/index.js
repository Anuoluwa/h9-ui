import React, { useState } from "react";
import PriceWrapper from "../PriceWrapper";
import { FaCheckCircle } from "react-icons/fa";
import CreateSubscriptions from "../CreateSubscription";
import styles from "./index.module.scss";
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
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import data from "./data.json";

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
          <Heading as="h1" fontSize="4xl">
            Plans that fit your need
          </Heading>
          <Text></Text>
          <Text fontSize="xl">
            Use our Euphoria Gold vouchers in any of our outlets. <br />{" "}
            <em></em>
          </Text>
          <Box>
            <List spacing={3} textAlign="start" mt={1} color="gray.900">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Free membership access to use the swimming pool.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Exclusive invite to House 9 events.
              </ListItem>
            </List>
          </Box>
        </VStack>
      </Box>
      <Wrap spacingY="5px" spacingX="288px" justify="center">
        {data.map((item) => {
          return (
            <WrapItem key={item.value}>
              <Center
                w="10px"
                h="380px"
                boxShadow="inner"
                rounded="md"
                shadow="base"
              >
                <Box
                  position="relative"
                  //bg={useColorModeValue("gray.50", "gray.700")}
                  boxShadow="inner"
                  p="0.5"
                  rounded="md"
                  bg="white"
                >
                  <Box
                    position="absolute"
                    top="-16px"
                    left="50%"
                    style={{ transform: "translate(-50%)" }}
                  >
                    <Text
                      textTransform=""
                      bg={"yellow.300"}
                      px={3}
                      py={1}
                      color={"gray.900"}
                      fontSize="xs"
                      fontWeight="600"
                      rounded="xl"
                    >
                      <span>&#8358;</span>
                      {item.discount} Off
                    </Text>
                  </Box>
                  <Box py={4} px={12} textAlign="center" bg={"gray.50"}>
                    <Stack
                      justifyContent="center"
                      spacing={0.5}
                      fontWeight="400"
                    >
                      <Text fontSize="2xl">
                        Buy <span>&#8358;</span>
                        {item.amount}
                      </Text>
                      <Text fontSize="md" fontWeight="500" color="gray.500">
                        For
                      </Text>
                      <Text fontSize="2xl" fontWeight="600" as="em">
                        <span>&#8358;</span>
                        {item.value}
                      </Text>
                    </Stack>
                    <Text fontWeight="500" fontSize="sm" color="red.500">
                      Valid for {item.validity} Days
                    </Text>
                  </Box>
                  <VStack
                    // bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                    fontSize="sm"
                    fontWeight="380"
                  >
                    <List spacing={3} textAlign="start" px={5}>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="yellow.500" />A
                        voucher of {item.amount} naira for {item.value} naira
                      </ListItem>
                      {/* <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem> */}
                      {/* <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Free membership access to use the swimming pool.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Exclusive invite to House 9 events.
                      </ListItem> */}
                    </List>
                    <Box w="80%" pt={7}>
                      <Button
                        w="full"
                        colorScheme="green"
                        fontSize="sm"
                        onClick={onOpen}
                        variant="outline"
                        px={10}
                      >
                        <text>Select Your Preferred Coupon</text>
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>
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
