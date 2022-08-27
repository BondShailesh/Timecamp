import React from 'react'
import Brands from '../Aadicomponent/brands/Brands'
import Demo from '../Aadicomponent/demo/Demo'
import Employees from '../Aadicomponent/Employes/Employees'
import Enterprise from '../Aadicomponent/enterprise/Enterprise'
import Hr from '../Aadicomponent/hr/Hr'
import Manager from '../Aadicomponent/manager/Manager'
import Navbar from '../Aadicomponent/Navbar/Navbar'
import Pricing from '../Aadicomponent/pricing/Pricing'
import Reviews from '../Aadicomponent/reviews/Reviews'
import Secure from '../Aadicomponent/securepay/Secure'
import Track from '../Aadicomponent/Track/Track'
import Tracking from '../Aadicomponent/tracking/Tracking'

const Home = () => {
  return (
    <div>
            <Navbar/>
      <Brands/>
      <Track/>
      <Employees/>
      <Manager/>
      <Enterprise/>
      <Hr/>
      <Demo/>
      <Reviews/>
      <Tracking/>
      <Pricing/>
      <Secure/>
    </div>
  )
}

export default Home