import React, { useEffect, useState } from 'react'
import './App.css'
import { Header } from './pages/Header'
import { Content } from './pages/Content'
import { Footer } from './pages/Footer'
import { updateLocationHistory } from './utils/updateLocationHistory'
import { StoreType } from './types/storeType'

const getSectionList = () => window.location.pathname.split('/').filter(x => !!x)

function App() {
  const [sectionList, setSectionList] = useState<string[]>(getSectionList)

  useEffect(() => {
    const eventName = 'popstate'
    const eventHandler = () => {
      setSectionList(getSectionList())
    }
  
    window.addEventListener(eventName, eventHandler)
    
    return () => {
      window.removeEventListener(eventName, eventHandler)
    }
  }, [])

  const updateSelectionList = (list: string[]) => {
    setSectionList(() => list)
    updateLocationHistory(list)
  }

  const selectChildrenSection = (sectionName: string): void => {
    updateSelectionList(sectionList.concat(sectionName))
  }

  const selectParentSection = (sectionName: string): void => {
    if (sectionName === 'home') {
      updateSelectionList(['vlog'])
    }

    const idx = sectionList.findIndex(section => section === sectionName)

    if (idx > -1) {
      sectionList.length = idx + 1
      updateSelectionList([...sectionList])
    }
  }

  const back = () => {
    sectionList.pop()
    updateSelectionList([...sectionList])
  }

  const store: StoreType = {
    sectionList,
    selectParentSection,
    selectChildrenSection,
    back
  }

  return (<>
        <Header store={store} />
        <Content store={store} />
        <Footer />
      </>
  )
}

export default App
