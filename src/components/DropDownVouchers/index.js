import React, { useState, useEffect } from "react";
import { listVouchers } from "../../services/vouchers";
import DropdownList from "react-widgets/lib/DropdownList";
import { Box } from "@chakra-ui/react";

const DropDownVouchers = ({ value, onChange }) => {
  const [vouchers, setVouchers] = useState([]);

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
    <div>
      <DropdownList
        value={value}
        datakey="_id"
        data={vouchers}
        defaultValue={vouchers[0]}
        textField="voucher"
        valueField="_id"
        onChange={onChange}
        allowCreate={false}
      />
    </div>
  );
};

export default DropDownVouchers;
