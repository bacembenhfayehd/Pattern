import React, { useState } from 'react'
import Tab from './Tab';

function Tabs({children}) {
    const [activeTab, setActiveTab] = useState(0);
  return React.Children.map(children, (child,index) => {
    if(child.type === Tab){
        return React.cloneElement(child, {
            isActive : index === activeTab,
            onClick : () => setActiveTab(index)
        })
    }
    return child
  })
}

export default Tabs