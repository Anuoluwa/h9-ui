// import React, { useState, useMemo, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { GiCancel } from 'react-icons/gi';
// import Button, { PrimaryButton } from '../../elements/CustomButton';
// import styles from './index.module.scss';
// import { FormInput, FormSelectInput, FormTextArea } from '../../elements/FormInput';
// import { addProduct } from '../../redux/actions/productActions';
// import { toast } from 'react-toastify';
// import { loadCategories } from '../../redux/actions/categoryActions';


// const AddVoucherModal = ({ setOpenAddProductModal, setOpenAddProductImageModal, addProduct, product, category, auth, loadCategories}) => {

//     useEffect(() =>{
//         loadCategories()
//     }, [])

//     // Reducer State
//     const {categories} = category
//     const {supplier} = auth
//     const {isLoading} = product

//     // Close Modal
//     const [closeModal, setCloseModal] = useState(true)

//     // Form Input Initialization
//     const [productInput, setProductInput] = useState({productName:"", description:"", composition:"", approvedProductNo:"", expirationDate:"", costPerUnit:"", category:"" })

//     const handleChange = (e) => {
//         const name = e.target.name
//         const value = e.target.value

//         setProductInput({
//             ...productInput,
//             [name]:value
//         })
//     }



//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if(productInput.productName && productInput.description && productInput.composition && productInput.approvedProductNo && productInput.expirationDate && productInput.costPerUnit && productInput.category){

//             addProduct(productInput.productName, productInput.description, productInput.composition, productInput.approvedProductNo, productInput.expirationDate, productInput.costPerUnit, productInput.category, supplier?._id)

//             // Close "add product" modal after form submission
//             setOpenAddProductModal(false)

//             // Open "add product image" Modal after submitting "add product" form
//             setOpenAddProductImageModal(true)
//         }else{
//             toast.error("Please, fill all details")
//         }
//     }

//     return(
//         closeModal ?
//         (<div className={styles._}>
//             <div className={styles.container}>
//                 <div className={styles.content}>
//                     <div className={styles.cancel_button} 
//                         onClick={() => {
//                             setCloseModal(false);
//                             setOpenAddProductModal(false);
//                         }}
//                         >
//                        <GiCancel className={styles.cancel_icon} />
//                     </div>
//                     <div className={styles.header}>
//                         <h2>Add Product</h2>    
//                     </div>
//                     <form action="">
//                         <FormInput 
//                             type="text"
//                             // label="Product Name"
//                             placeholder="Product Name"
//                             name="productName"
//                             value={productInput.productName}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             required
//                         />
//                         <FormInput 
//                             type="text"
//                             placeholder="Composition"
//                             name="composition"
//                             value={productInput.composition}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             required
//                         />
//                         <FormInput 
//                             type="text"
//                             placeholder="Product No"
//                             name="approvedProductNo"
//                             value={productInput.approvedProductNo}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             required
//                         />
//                         <FormInput 
//                             type="date"
//                             placeholder="Expiring Date"
//                             onfocus="(this.type='date')"
//                             onblur="(this.type='text')"
//                             name="expirationDate"
//                             value={productInput.expirationDate}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             required
//                         />
//                         <FormInput 
//                             type="text"
//                             placeholder="Cost"
//                             name="costPerUnit"
//                             value={productInput.costPerUnit}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             required
//                         />
//                         <FormSelectInput 
//                             name="category"
//                             value={productInput.category}
//                             handleChange={handleChange}
//                             className={styles.form_input}
//                             options={categories}
//                         />
//                         <FormTextArea 
//                             rows="4"
//                             className={styles.text_area} 
//                             placeholder="Enter description here"
//                             name="description"
//                             value={productInput.description}
//                             handleChange={handleChange}
//                             />
                       
//                         <div className={styles.button_container}>
//                             <Button 
//                                 className={styles.cancel_btn} 
//                                 onClick={() => {
//                                 setCloseModal(false);
//                                 setOpenAddProductModal(false);
//                             }}>
//                                 Cancel
//                             </Button>
//                             <PrimaryButton 
//                                 isLoading={isLoading}
//                                 onClick={handleSubmit} 
//                                 className={styles.submit_btn}
//                                 type="submit"
//                             >
//                                 Continue
//                             </PrimaryButton>
//                         </div>
//                     </form>    
//                 </div>
//             </div>
//         </div>) : null
//     )
// }
// const mapStateToProps = (state) => ({
//     product:state.product,
//     category:state.category,
//     auth:state.auth,
// })


// export default connect(mapStateToProps, { addProduct, loadCategories }) (AddVoucherModal)