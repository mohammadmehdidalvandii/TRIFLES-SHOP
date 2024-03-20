import PageHeader from '@/components/module/PageHeader/PageHeader'
import AboutUs from '@/components/template/about/AboutUs/AboutUs'
import Team from '@/components/template/about/AboutUs/Team/Team'
import React from 'react'

function About() {
  return (
    <>
      <PageHeader
        title='درباره ما'
      />
      <AboutUs/>
      <Team/>
    </>
  )
}

export default About