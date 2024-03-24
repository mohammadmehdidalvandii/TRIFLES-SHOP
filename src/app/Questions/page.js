import PageHeader from '@/components/module/PageHeader/PageHeader'
import QuestionContent from '@/components/template/question/QuestionContent'
import React from 'react'

function page() {
  return (
    <>
        <PageHeader
            title='سوالات متدوال'
        />
        <QuestionContent/>
    </>
  )
}

export default page