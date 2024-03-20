import PageHeader from '@/components/module/PageHeader/PageHeader'
import Region from '@/components/template/services/Region/Region'
import Summary from '@/components/template/services/Summary/Summary'
import React from 'react'

function page() {
  return (
    <>
            <PageHeader
                title='خدمات'
            />
            <Summary/>
            <Region/>
     </>
  )
}

export default page