// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { CreateContentModal } from './components/ui/CreateContentModel'
import { PlusIcon } from './icons/PlusIcon'
// import { Buttons } from './components/ui/Buttons'
import { ShareIcon } from './icons/ShareIcon'
import { SideBar } from './components/ui/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <div>
    <SideBar/>
     <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }} />
      <div className='flex justify-end gap-4'>
     <Button onClick={()=>{
       setModalOpen(true)
      }} startIcon={<PlusIcon size='md'></PlusIcon>}variant="primary" text="Add Content " size='md' ></Button>
     <Button   startIcon={<ShareIcon size='md'></ShareIcon>}  variant="secondary" text="Share Brain" size='md'></Button>
     </div>
     <div className='flex gap-4'>
     <Card title='twitter' type='twitter' link='https://twitter.com/JatinMehta35630/status/1940102573698245061'></Card>
      <Card title='FIRST video' type='youtube' link='https://www.youtube.com/watch?v=0itY1Fhvnnk'></Card>
      </div>
     </div>
      </div>
    
  )
}

export default App
