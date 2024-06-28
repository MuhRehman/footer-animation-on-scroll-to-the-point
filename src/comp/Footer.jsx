import React , { useState, useCallback, useEffect } from 'react'

export default function Footer() {

    const [y, setY] = useState(window.scrollY);
    const [isActive, setisActive] = useState(false);

    const handleNavigation = useCallback(
      (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          console.log("scrolling up");
        } else if (y < window.scrollY) {
          console.log("scrolling down" + window.scrollY);
          if (window.scrollY > 2200) {
            // alert("yes 800 scrolled ");
            setisActive(true);
          }
        }
        setY(window.scrollY);
      },
      [y]
    );
  
    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
  
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);



  return (
    <div className='footer-wrap'>

        <h2>Footer</h2>
     <div className={"container fadein  " + (isActive ? 'visible' : 'hidden')} >
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
     </div> 
    </div>
  )
}
