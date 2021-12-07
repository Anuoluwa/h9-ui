import React, { useEffect, useState } from "react";
// import dateFormat from 'dateformat';
// import { FiEdit2 } from 'react-icons/fi';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import product_placeholder from '../../assets/images/product_placeholder.jpg';
import styles from "./index.module.scss";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { loadVouchers } from "../../redux/actions/voucherActions";
// import EditProductModal from '../EditProductModal';
// import { useSelector } from 'react-redux';
// import EditProductImageModal from '../EditProductImageModal';

const VoucherItem = ({ ...product_item }) => {
  // const createdAt = dateFormat(`${product_item?.createdAt}`, "mmm dS, yyyy")
  // const expirationDate = dateFormat(`${product_item?.expirationDate}`, "mmm dS, yyyy")

  const dispatch = useDispatch();
  // useEffect(() => {
  //    dispatch(loadProducts())
  // }, [dispatch])
  // const handleDelete = () => {
  //     return dispatch(deleteProduct())
  // }
  // const {added_product_id} = useSelector(state => state.product)

  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [openEditProductImageModal, setOpenEditProductImageModal] =
    useState(false);

  return (
    <div className={styles.table_row}>
      <div className={styles.col}>
        {/* <div className={styles.product_image}>
                    <img src={product_item?.productPhotoURL || product_placeholder} alt="" />
                </div> */}
        <p>{product_item?.actualPrice}</p>
      </div>
      <div className={styles.col}>
        <p>{product_item?.discountPercentage}</p>
      </div>
      <div className={styles.col}>
        <p>{product_item?.discountedPrice}</p>
      </div>
      <div className={styles.col}>
        <p>{product_item?.validity}</p>
      </div>
      {/* <div className={styles.col}>
        <p>{product_item?.estimatedTarget}</p>
      </div> */}
      {/* <div className={styles.col}>
                <FiEdit2 className={styles.action_icon} onClick={() => setOpenEditProductModal(true)}/>
                <RiDeleteBin6Line className={styles.action_icon} onClick={handleDelete}/>
            </div>
            {
                 openEditProductModal && 
                 <EditProductModal 
                    setOpenEditProductModal={setOpenEditProductModal}
                    productName={product_item?.productName}
                    composition={product_item?.composition}
                    approvedProductNo={product_item?.approvedProductNo}
                    expirationDate={product_item?.expirationDate}
                    costPerUnit={product_item?.costPerUnit}
                    category={product_item?.category?.category}
                    description={product_item?.description}
                    setOpenEditProductImageModal={setOpenEditProductImageModal}
                 />
            }
             {
                openEditProductImageModal && 
                <EditProductImageModal
                    setOpenEditProductImageModal={setOpenEditProductImageModal}
                    added_product_id={added_product_id}
                />
            } */}
    </div>
  );
};

export default withRouter(VoucherItem);
