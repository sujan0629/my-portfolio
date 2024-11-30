import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrapp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app_flex">
        <Component />
        
      

      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrapp;
