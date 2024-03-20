import PageHeader from '@/components/module/PageHeader/PageHeader'
import Products from '@/components/template/shop/Products'
import React from 'react'

function Shop() {
  return (
   <>
    <PageHeader
      title='فروشگاه'
    />
    <Products/>
   </>
  )
}

export default Shop