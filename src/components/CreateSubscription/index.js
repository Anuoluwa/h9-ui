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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { listVouchers } from "../../services/vouchers";

const CreateSubscriptions = ({ handleClose, subscriptionValue }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [voucherId, setVoucherId] = useState("");
  const [mobile, setMobile] = useState("");
  const [birthMonth, setbirthMonth] = useState([]);
  const [birthday, setbirthday] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [units, setUnits] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const toast = useToast();

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = { email, name, mobile, voucherId, birthMonth, birthday, units };
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
    } catch (err) {
      console.log('err', err)
      toast({
        title: "Oops!",
        description: err.response.data.message,
        status: "info",
        duration: 10000,
        isClosable: true,
        position: "top-right",
      });
      setError("Invalid, please try again");
      setIsLoading(false);
      setEmail("");
      setName("");
      setVoucherId("");
      setMobile("");
      setbirthMonth([])
      setbirthday([])
      setVouchers([])
      setUnits("")
    }

    handleClose();
    history.push("/");
    // onSubmit(email, name, mobile);
  };

  useEffect(() => {
    const fetchVouchers = async () => {
      const data = await listVouchers();
      setVouchers(
        data.map((voucher) => ({
          ...voucher,
          voucher: `NGN ${voucher.discountedPrice} for ${voucher.validity}`,
        }))
      );
    };
    fetchVouchers();
  }, []);


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];


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
        <FormLabel>Select Birth Month and Date</FormLabel>
        <Stack direction="row">
        <Select
          placeholder="Select Month"
          name="voucherId"
          onChange={(event) => setbirthMonth(event.target.value)}
          variant="filled"
        >
          {months.map((option) => {
            return (
              <option
                value={option}
              >{`${option}`}</option>
            );
          })}
        </Select>

        <Select
          placeholder="Select Date"
          name="voucherId"
          onChange={(event) => setbirthday(event.target.value)} 
          variant="filled"
        >
          {days.map((option) => {
            return (
              <option
                value={option}
              >{`${option} `}</option>
            );
          })}
        </Select>

        </Stack>
        
      </FormControl>

      {/* <FormControl id="dropdown" isRequired mt={6}>
        <FormLabel>Select voucher</FormLabel>
        <Select
          placeholder="Select Voucher"
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
      </FormControl> */}
      
      <FormControl id="dropdown" isRequired mt={6}>
        <FormLabel>Select voucher</FormLabel>
        <RadioGroup
          name="voucherId"
          onChange={setVoucherId}
        >
          <Stack direction="row">
            {vouchers.map((option) => {
              return (
                <Radio value={option._id}><span>&#8358;</span>{`${option.actualPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</Radio>
              );
            })}
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl id="amount" mt={6}>
        <FormLabel>Number of Vouchers</FormLabel>
        <NumberInput max={100} min={1}>
          <NumberInputField onChange={(event) => setUnits(event.target.value)}/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
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
