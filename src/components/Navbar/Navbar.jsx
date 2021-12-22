import React, {useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {
    const [isShow, setIsShow] = useState(false)
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsShow(true)
            }else setIsShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
			<div className={`navbar ${isShow && "navbar-black"} `}>
				<img
					className="nav-logo"
					src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-1536x413.png"
					alt=""
				/>
				<img
					className="navbar-avatar"
					src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
					alt=""
				/>
			</div>
		);
}

export default Navbar
