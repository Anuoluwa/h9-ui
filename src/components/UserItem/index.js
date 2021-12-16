import React, { useEffect, useState } from "react";
// import dateFormat from 'dateformat';
// import { FiEdit2 } from 'react-icons/fi';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import product_placeholder from '../../assets/images/product_placeholder.jpg';
import styles from "./index.module.scss";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
// import EditProductModal from '../EditProductModal';
// import { useSelector } from 'react-redux';
// import EditProductImageModal from '../EditProductImageModal';

const UserItem = ({ ...user_item }) => {
  // const createdAt = dateFormat(`${user_item?.createdAt}`, "mmm dS, yyyy")
  // const expirationDate = dateFormat(`${user_item?.expirationDate}`, "mmm dS, yyyy")

  const dispatch = useDispatch();
  // useEffect(() => {
  //    diUsers())
  // }, [dispatch])
  // const handleDelete = () => {
  //     return dispatch(deleteProduct())
  // }

  // console.log(added_product_id)
  // const {added_product_id} = useSelector(state => state.product)

  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [openEditProductImageModal, setOpenEditProductImageModal] =
    useState(false);

  return (
    <div className={styles.table_row}>
      <div className={styles.col}>
        {/* <div className={styles.product_image}>
                    <img src={user_item?.productPhotoURL || product_placeholder} alt="" />
                </div> */}
        <p>{user_item?.name}</p>
      </div>
      <div className={styles.col}>
        <p>{user_item?.email}</p>
      </div>
      <div className={styles.col}>
        <p>{user_item?.birthMonth + " " + user_item?.birthday}</p>
      </div>
      <div className={styles.col}>
        <p>{user_item?.mobile}</p>
      </div>
      {/* <div className={styles.col}>
                <FiEdit2 className={styles.action_icon} onClick={() => setOpenEditProductModal(true)}/>
                <RiDeleteBin6Line className={styles.action_icon} onClick={handleDelete}/>
            </div> */}
      {/* {
                 openEditProductModal && 
                 <EditProductModal 
                    setOpenEditProductModal={setOpenEditProductModal}
                    productName={user_item?.productName}
                    composition={user_item?.composition}
                    approvedProductNo={user_item?.approvedProductNo}
                    expirationDate={user_item?.expirationDate}
                    costPerUnit={user_item?.costPerUnit}
                    category={user_item?.category?.category}
                    description={user_item?.description}
                    setOpenEditProductImageModal={setOpenEditProductImageModal}
                 />
            } */}
      {/* {
                openEditProductImageModal && 
                <EditProductImageModal
                    setOpenEditProductImageModal={setOpenEditProductImageModal}
                    added_product_id={added_product_id}
                />
            } */}
    </div>
  );
};

export default withRouter(UserItem);
