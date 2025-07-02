// import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
// import { Buttons } from './components/ui/Buttons'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
     
     <Button startIcon={<PlusIcon size='md'></PlusIcon>}variant="primary" text="Add Content " size='md' ></Button>
     <Button   startIcon={<ShareIcon size='md'></ShareIcon>}  variant="secondary" text="Share Brain" size='md'></Button>
     
     {/* <Buttons EndIcon={<ShareIcon size='lg'></ShareIcon>} StartIcon={<PlusIcon size='lg'></PlusIcon>} size='lg' text='hero honda' variant='primary' ></Buttons> */}
    </>
  )
}

export default App
