import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../components/header/Header'
import { ExploreMenu } from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
export const Home = () => {

  const [category, setCategory] = useState("All"); 

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  
  )
}
