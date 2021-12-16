import React, { useEffect, useState } from "react";
// import dateFormat from 'dateformat';
import { FiTrendingDown, FiPlusSquare } from "react-icons/fi";

// import { RiDeleteBin6Line } from 'react-icons/ri';
// import product_placeholder from '../../assets/images/product_placeholder.jpg';
import styles from "./index.module.scss";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
import AddExpenseModal from "../AddExpenseModal";
import AddPaymentModal from "../AddPaymentModal";
// import { useSelector } from 'react-redux';
// import EditProductImageModal from '../EditProductImageModal';

const SubscriptionItem = ({
  updated_subscription_id,
  ...subscription_item
}) => {
  // console.log(subscription_item, 'subscription_item')
  // const createdAt = dateFormat(`${subscription_item?.createdAt}`, "mmm dS, yyyy")
  // const expirationDate = dateFormat(`${subscription_item?.expirationDate}`, "mmm dS, yyyy")

  const dispatch = useDispatch();
  // useEffect(() => {
  //    diUsers())
  // }, [dispatch])
  // const handleDelete = () => {
  //     return dispatch(deleteProduct())
  // }

  // console.log(updated_subscription_id)

  // const {added_product_id} = useSelector(state => state.product)

  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [openMakePaymentModal, setOpenMakePaymentModal] = useState(false);
  const [openEditProductImageModal, setOpenEditProductImageModal] =
    useState(false);

  return (
    <div className={styles.table_row}>
      <div className={styles.col}>
        {/* <div className={styles.product_image}>
                    <img src={subscription_item?.productPhotoURL || product_placeholder} alt="" />
                </div> */}
        <p>{subscription_item?.customerName}</p>
      </div>
      <div className={styles.col}>
        <p>{subscription_item?.code}</p>
      </div>
      <div className={styles.col}>
        <p>{subscription_item?.voucherAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      </div>
      <div className={styles.col}>
        <p>{subscription_item?.totalSpent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      </div>
      <div className={styles.col}>
        <p>{subscription_item?.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      </div>
      <div className={styles.col}>
        <FiTrendingDown
          className={styles.expenses}
          onClick={() => setOpenEditProductModal(true)}
        />
        {/* <RiDeleteBin6Line className={styles.action_icon} onClick={handleDelete}/> */}
      </div>
      <div className={styles.col}>
        <FiPlusSquare
          className={styles.payment}
          onClick={() => setOpenMakePaymentModal(true)}
        />
        {/* <RiDeleteBin6Line className={styles.action_icon} onClick={handleDelete}/> */}
      </div>
      {openEditProductModal && (
        <AddExpenseModal
          setOpenEditProductModal={setOpenEditProductModal}
          updated_subscription_id={subscription_item._id}
        />
      )}
      {openMakePaymentModal && (
        <AddPaymentModal
          setOpenMakePaymentModal={setOpenMakePaymentModal}
          updated_subscription_id={subscription_item._id}
        />
      )}
    </div>
  );
};

export default withRouter(SubscriptionItem);
