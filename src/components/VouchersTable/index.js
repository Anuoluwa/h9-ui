import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { loadVouchers } from '../../redux/actions/voucherActions';
import VoucherItem from '../VoucherItem';
import EmptyState from '../EmptyState';
import LoadingState from '../LoadingState';
import { IoMdAdd} from 'react-icons/io';
import { PrimaryButton } from '../../elements/CustomButton';
// import AddProductModal from '../AddVoucherModal';
// import AddProductImageModal from '../AddProductImageModal';


const VouchersTable = (props) => {
    
    useEffect(() => {
        props.loadVouchers()
    }, [])

    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [openAddProductImageModal, setOpenAddProductImageModal] = useState(false);

    const { vouchers, isLoading } = props.voucher
                               
    console.log(vouchers, 'vouchers')

    // Get total available voucher
    const total_vouchers = vouchers?.length

    // Get Added Product
    // const added_product_id = added_product?._id

    if(isLoading){
        return(
            <div>
                 <LoadingState />
            </div>
        )
    }

//     actualPrice
// :
// "100,000"
// discountPercentage
// :
// "10"
// discountedPrice
// :
// "90000"
// estimatedTarget
// :
// "

    return(
        <>
            {
             total_vouchers === 0 ? <EmptyState message="No Voucher created yet" /> :

            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.table_head}>
                        <div>Actual Price</div>
                        <div>Percentage Discount</div>
                        <div>Discounted Price</div>
                        <div>Validity</div>
                    </div>
                    <div className={styles.table_body}>
                        {
                            vouchers.map((voucher_item) => (
                                <VoucherItem 
                                key={voucher_item?._id} 
                                openAddProductModal={openAddProductModal} 
                                // added_product_id={added_product_id}
                                {...voucher_item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            }
            {/* <div className={styles.add_product}>
                <PrimaryButton 
                    className={styles.add_product_btn} 
                    onClick={() => setOpenAddProductModal(true)}>
                    <IoMdAdd className={styles.add_icon}/><p>Create Voucher</p>
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
    )
}

const mapStateToProps = (state) => ({
    voucher:state.voucher
})

export default connect(mapStateToProps, {loadVouchers}) (VouchersTable)
