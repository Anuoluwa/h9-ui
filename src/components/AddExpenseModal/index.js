import React, { useState, useMemo, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import Button, { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';
import { FormInput} from '../../elements/FormInput';
import { toast } from 'react-toastify';
import { editSubscriptions } from '../../redux/actions/subscriptionAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const AddExpenseModal = ({ setOpenEditProductModal, updated_subscription_id }) => {
    const dispatch = useDispatch() 

    const {isLoading} = useSelector(state => state.subscription)

    // Close Modal
    const [closeModal, setCloseModal] = useState(true)

    // Form Input Initialization
    const [subscriptionInput, setSubscriptionInput] = useState({totalAmount:""})

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
        if(subscriptionInput.totalAmount){
            dispatch(editSubscriptions(subscriptionInput.totalAmount, updated_subscription_id))

            // Close "add totalAmount" modal after form submission
            setOpenEditProductModal(false)
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
                            setOpenEditProductModal(false);
                        }}
                        >
                       <GiCancel className={styles.cancel_icon} />
                    </div>
                    <div className={styles.header}>
                        <h2>Add Expenses</h2>    
                    </div>
                    <form action="">
                        <FormInput 
                            type="text"
                            label="Expenses"
                            placeholder="Input customer expenses"
                            name="totalAmount"
                            value={subscriptionInput.totalAmount}
                            handleChange={handleChange}
                            className={styles.form_input}
                            required
                        />
                       
                        <div className={styles.button_container}>
                            <Button 
                                className={styles.cancel_btn} 
                                onClick={() => {
                                setCloseModal(false);
                                setOpenEditProductModal(false);
                            }}>
                                Cancel
                            </Button>
                            <PrimaryButton 
                                isLoading={isLoading}
                                onClick={handleSubmit} 
                                className={styles.submit_btn}
                                type="submit"
                            >
                                Add Expenses
                            </PrimaryButton>
                        </div>
                    </form>    
                </div>
            </div>
        </div>) : null
    )
}


export default AddExpenseModal