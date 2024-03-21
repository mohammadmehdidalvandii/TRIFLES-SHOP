import PageHeader from '@/components/module/PageHeader/PageHeader';
import Details from '@/components/template/shop/Details/Details';
import Tabs from '@/components/template/shop/Tabs/Tabs';
import React from 'react';;

function ProductDetails() {
  return (
   <>
    <PageHeader
      title='جزئیات محصول'
    />
    <Details/>
    <Tabs/>
   </>
  )
}

export default ProductDetails