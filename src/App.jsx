import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import router from './component/router/routes'

function App() {
  

  return (
   <div>
    <RouterProvider router={router}>

    </RouterProvider>
   </div>
  )
}

export default App
