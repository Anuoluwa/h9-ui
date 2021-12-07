import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { loadSubscriptions } from '../../redux/actions/subscriptionAction';
import SubscriptionItem from '../SubscriptionItem';
import EmptyState from '../EmptyState';
import LoadingState from '../LoadingState';
import { IoMdAdd} from 'react-icons/io';
import { PrimaryButton } from '../../elements/CustomButton';
// import AddProductModal from '../AddExpenseModal';


const SubscriptionTable = (props) => {
    
    useEffect(() => {
        props.loadSubscriptions()
    }, [])

    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    // const [openAddProductImageModal, setOpenAddProductImageModal] = useState(false);

    const { subscriptions, isLoading, updated_subscription } = props.subscription

    // Get total available subscription
    const total_subscriptions = subscriptions?.length
    // console.log(subscriptions, updated_subscription 'subbbb')
    console.log('updated_subs+++++', subscriptions)

    // Get Added Product
    const updated_subscription_id = updated_subscription?._id

    if(isLoading){
        return(
            <div>
                 <LoadingState />
            </div>
        )
    }

    return(
        <>
            {
             total_subscriptions === 0 ? <EmptyState message="No Item added yet" /> :

            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.table_head}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Mobile</div>
                        <div>Voucher Code</div>
                        <div>Voucher Amount</div>
                        <div>Amount Spent</div>
                        <div>Voucher Balance</div>
                    </div>
                    <div className={styles.table_body}>
                        {
                            subscriptions.map((product_item) => (
                                <SubscriptionItem 
                                key={product_item?._id} 
                                openAddProductModal={openAddProductModal} 
                                updated_subscription_id={updated_subscription_id}
                                {...product_item} />
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
                    <IoMdAdd className={styles.add_icon}/><p>Add Expense</p>
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
    subscription:state.subscription
})

export default connect(mapStateToProps, {loadSubscriptions}) (SubscriptionTable)
