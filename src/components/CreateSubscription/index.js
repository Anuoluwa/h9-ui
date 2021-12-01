import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createSubscriptions } from "../../services/subscriptions";
import DropDownVouchers from "../DropDownVouchers";
import ErrorMessage from "../ErrorMessage";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { listVouchers } from "../../services/vouchers";

const CreateSubscriptions = ({ handleClose }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [voucherId, setVoucherId] = useState("");
  const [mobile, setMobile] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const toast = useToast();

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = { email, name, mobile, voucherId };
    try {
      await createSubscriptions(payload);
      toast({
        title: "Success!",
        description: "Kindly check your email for the voucher detail",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      setIsLoading(false);
    } catch (error) {
      setError("Invalid, please try again");
      setIsLoading(false);
      setEmail("");
      setName("");
      setVoucherId("");
      setMobile("");
    }

    handleClose();
    history.push("/");
    // onSubmit(email, name, mobile);
  };

  useEffect(() => {
    const fetchVouchers = async () => {
      const data = await listVouchers();
      console.log(data[0], "0data****");
      setVouchers(
        data.map((voucher) => ({
          ...voucher,
          voucher: `NGN ${voucher.discountedPrice} for ${voucher.validity}`,
        }))
      );
    };
    fetchVouchers();
  }, []);

  return (
    <form onSubmit={handleSave} my={4}>
      {error && <ErrorMessage message={error} />}
      <FormControl id="email" isRequired>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          size="lg"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      <FormControl id="name" isRequired mt={6}>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="name"
          placeholder="Full Name"
          size="lg"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

      <FormControl id="mobile" isRequired mt={6}>
        <FormLabel>Mobile Number</FormLabel>
        <Input
          type="mobile"
          placeholder="Mobile number"
          size="lg"
          onChange={(event) => setMobile(event.target.value)}
        />
      </FormControl>

      <FormControl id="dropdown" isRequired mt={6}>
        <FormLabel>Select voucher</FormLabel>
        <Select
          placeholder="Select option"
          name="voucherId"
          onChange={(event) => setVoucherId(event.target.value)}
          variant="filled"
        >
          {vouchers.map((option) => {
            return (
              <option
                value={option._id}
              >{`${option.discountedPrice} for ${option.validity}`}</option>
            );
          })}
        </Select>
      </FormControl>
      <Button colorScheme="green" mr={3} type="submit" width="full" mt={6}>
        {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="teal" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default CreateSubscriptions;
