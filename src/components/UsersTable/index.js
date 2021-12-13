import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./index.module.scss";
import { loadUsers } from "../../redux/actions/userActions";
import ProductItem from "../UserItem";
import EmptyState from "../EmptyState";
import LoadingState from "../LoadingState";
import { IoMdAdd } from "react-icons/io";
import { PrimaryButton } from "../../elements/CustomButton";
// import AddProductModal from '../AddVoucherModal';
// import AddProductImageModal from '../AddProductImageModal';

const UsersTable = (props) => {
  useEffect(() => {
    props.loadUsers();
  }, []);

  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [openAddProductImageModal, setOpenAddProductImageModal] =
    useState(false);

  const { users, added_user, isLoading } = props.user;

  // Get total available users
  const total_users = users?.length;

  // Get Added Product
  // const added_user_id = added_user?._id

  if (isLoading) {
    return (
      <div>
        <LoadingState />
      </div>
    );
  }

  return (
    <>
      {total_users === 0 ? (
        <EmptyState message="No registered users yet" />
      ) : (
        <div className={styles._}>
          <div className={styles.container}>
            <div className={styles.table_head}>
              <div>Full Name</div>
              <div>Email</div>
              <div>Birthday</div>
              <div>Mobile</div>
            </div>
            <div className={styles.table_body}>
              {users.map((user_item) => (
                <ProductItem
                  key={user_item?._id}
                  openAddProductModal={openAddProductModal}
                  // added_user_id={added_user_id}
                  {...user_item}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <div className={styles.add_user}>
                <PrimaryButton 
                    className={styles.add_user_btn} 
                    onClick={() => setOpenAddProductModal(true)}>
                    <IoMdAdd className={styles.add_icon}/><p>Add Product</p>
                </PrimaryButton>
            </div> */}
      {/* {
                openAddProductModal && 
                <AddProductModal 
                    setOpenAddProductModal={setOpenAddProductModal}
                    setOpenAddProductImageModal={setOpenAddProductImageModal}
                />
            } */}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { loadUsers })(UsersTable);
