import PageHeader from '@/components/module/PageHeader/PageHeader'
import BasketCard from '@/components/template/basket/BasketCard/BasketCard'
import BasketInfo from '@/components/template/basket/BasketInfo/BasketInfo'
import React from 'react'

function page() {
  return (
 <>
      <PageHeader
    title='سبد خرید '
   />
    <BasketCard/>
    <BasketInfo/>
 </>
  )
}

export default page