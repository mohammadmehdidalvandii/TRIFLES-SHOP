import PageHeader from '@/components/module/PageHeader/PageHeader'
import BasketCard from '@/components/template/basket/BasketCard/BasketCard'
import React from 'react'

function page() {
  return (
 <>
      <PageHeader
    title='سبد خرید '
   />
    <BasketCard/>
 </>
  )
}

export default page