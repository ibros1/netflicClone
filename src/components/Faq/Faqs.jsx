import React from 'react'
import faqData from '../../content/faq.json'
import Faq from './Faq'

const Faqs = () => {
  return (
    <div>
      <h1 className='text-center text-[50px] text-weight-[500px] font-bold ' >Frequently Asked Questions</h1>
      {faqData.map((faq) => (
        <Faq key={faq.id} {...faq} />
      ))}
    	<div className='mt-10'>
				
			
			</div>
    </div>
  )
}

export default Faqs
