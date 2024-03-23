import PageHeader from '@/components/module/PageHeader/PageHeader'
import NewsDetails from '@/components/template/news/NewsDetails/NewsDetails'
import React from 'react'

function page() {
  return (
  <>
    <PageHeader
        title='جزئیات اخبار'
    />
    <NewsDetails/>
  </>
  )
}

export default page