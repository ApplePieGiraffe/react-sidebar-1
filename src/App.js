import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

function App() {
	const [activeSidebar, setActiveSidebar] = useState(false)

    function toggleSidebar() {
        setActiveSidebar(!activeSidebar)
    }
	
	return (
		<>
			<Header toggleSidebarFunc={toggleSidebar}/>
			<Sidebar isSidebarActive={activeSidebar}/>
			<Hero/>
		</>
	)
}

export default App