import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
         {['home', 'about', 'work', 'skills', 'online platforms', 'footer'].map((item, index) => (
         <a
         href={`#${item}`} 
         key={item + index}
         className="app__navigation-dot"
         style={active === item ? { backgroundColor: 'rgb(167, 2, 2)' } : { }}
         />
        ))}
    </div>
  )
}

export default NavigationDots
