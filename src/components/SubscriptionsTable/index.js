import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { loadProducts } from '../../redux/actions/productActions';
import ProductItem from '../ProductItem';
import EmptyState from '../EmptyState';
import LoadingState from '../LoadingState';
import { IoMdAdd} from 'react-icons/io';
import { PrimaryButton } from '../../elements/CustomButton';
import AddProductModal from '../AddProductModal';
import AddProductImageModal from '../AddProductImageModal';


const ProductsTable = (props) => {
    
    useEffect(() => {
        props.loadProducts()
    }, [])

    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [openAddProductImageModal, setOpenAddProductImageModal] = useState(false);

    const { products, added_product, isLoading } = props.product

    // Get total available product
    const total_products = products?.length

    // Get Added Product
    const added_product_id = added_product?._id

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
             total_products === 0 ? <EmptyState message="No Item added yet" /> :

            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.table_head}>
                        <div>Product Name</div>
                        <div>Category</div>
                        <div>Composition</div>
                        <div>NAFDAC No</div>
                        <div>Uploaded</div>
                        <div>Cost</div>
                        <div>Expiring</div>
                        <div>Actions</div>
                    </div>
                    <div className={styles.table_body}>
                        {
                            products.map((product_item) => (
                                <ProductItem 
                                key={product_item?._id} 
                                openAddProductModal={openAddProductModal} 
                                added_product_id={added_product_id}
                                {...product_item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            }
            <div className={styles.add_product}>
                <PrimaryButton 
                    className={styles.add_product_btn} 
                    onClick={() => setOpenAddProductModal(true)}>
                    <IoMdAdd className={styles.add_icon}/><p>Add Product</p>
                </PrimaryButton>
            </div>
            {
                openAddProductModal && 
                <AddProductModal 
                    setOpenAddProductModal={setOpenAddProductModal}
                    setOpenAddProductImageModal={setOpenAddProductImageModal}
                />
            }
            {
                openAddProductImageModal && 
                <AddProductImageModal 
                    setOpenAddProductImageModal={setOpenAddProductImageModal}
                    added_product_id={added_product_id}
                />
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    product:state.product
})

export default connect(mapStateToProps, {loadProducts}) (ProductsTable)
