import React, { useState, useMemo, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import Button, { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';
import { FormInput} from '../../elements/FormInput';
import { toast } from 'react-toastify';
import { makePayment } from '../../redux/actions/subscriptionAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const AddPaymentModal = ({ setOpenMakePaymentModal, updated_subscription_id }) => {
    const dispatch = useDispatch() 

    const {isLoading} = useSelector(state => state.subscription)

    // Close Modal
    const [closeModal, setCloseModal] = useState(true)

    // Form Input Initialization
    const [subscriptionInput, setSubscriptionInput] = useState({amount:""})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setSubscriptionInput({
            ...subscriptionInput,
            [name]:value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if(subscriptionInput.amount){
            // console.log('subscriptionInput.amount', typeof subscriptionInput.amount )

            dispatch(makePayment(subscriptionInput.amount, updated_subscription_id))

            // Close "add amount" modal after form submission
            setOpenMakePaymentModal(false)
        }else{
            toast.error("Please, fill all details")
        }
    }

    return(
        closeModal ?
        (<div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.cancel_button} 
                        onClick={() => {
                            setCloseModal(false);
                            setOpenMakePaymentModal(false);
                        }}
                        >
                       <GiCancel className={styles.cancel_icon} />
                    </div>
                    <div className={styles.header}>
                        <h2>Input Payment Amount</h2>    
                    </div>
                    <form action="">
                        <FormInput 
                            type="text"
                            label="Payments"
                            placeholder="Input customer's amount"
                            name="amount"
                            value={subscriptionInput.amount}
                            handleChange={handleChange}
                            className={styles.form_input}
                            required
                        />
                       
                        <div className={styles.button_container}>
                            <Button 
                                className={styles.cancel_btn} 
                                onClick={() => {
                                setCloseModal(false);
                                setOpenMakePaymentModal(false);
                            }}>
                                Cancel
                            </Button>
                            <PrimaryButton 
                                isLoading={isLoading}
                                onClick={handleSubmit} 
                                className={styles.submit_btn}
                                type="submit"
                            >
                                Submit Amount
                            </PrimaryButton>
                        </div>
                    </form>    
                </div>
            </div>
        </div>) : null
    )
}


export default AddPaymentModal