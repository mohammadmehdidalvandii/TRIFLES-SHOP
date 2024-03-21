import PageHeader from '@/components/module/PageHeader/PageHeader'
import Newsletter from '@/components/template/index/Newsletter/Newsletter'
import Newspapers from '@/components/template/news/Newspapers'
import React from 'react'

function page() {
  return (
   <>
    <PageHeader
        title='اخبار'
    />
    <Newspapers/>
   </>
  )
}

export default page