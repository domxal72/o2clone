import {useState, useEffect, createContext} from 'react'

export const ScrollContext = createContext(null)

function ScrollContextProvider({children}) {

  const [scrollOptions, setScrollOptions] = useState({scrollY: 0, isScrollingUp: false})

  const handleScroll = () => {
    setScrollOptions((scrollOptions) => (
      {
        ...scrollOptions,
        scrollY: window.scrollY,
        isScrollingUp: (window.scrollY < scrollOptions.scrollY)
      }))
  }

  useEffect(() => {
    if((typeof window !== 'undefined')){
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <ScrollContext.Provider
      value={{
        scrollOptions,
        setScrollOptions,
        handleScroll
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContextProvider
