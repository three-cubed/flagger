import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// const AppContext = React.createContext();

// import flagData from './flagData/flagData';

// export { AppContext, AppProvider };

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchArray, setSearchArray] = useState([])
    const [flags, setFlags] = useState([])
  
    const getFlags = useCallback( async () => {
      setLoading(true)
      try {
        console.log({flagData});
        const { flags } = flagData
        if (flags) {
          const newFlags = flags.map((item) => {
            const {
              id,
              str,
              features,
            } = item
  
            return {
              id: id,
              str: str,
              features: features,
            }
          })
          setFlags(newFlags)
        } else {
          setFlags([])
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    },[searchTerm])
    useEffect(() => {
      getFlags()
    }, [searchTerm,getFlags])
    return (
      <AppContext.Provider
        value={{ loading, flags, searchArray, setSearchArray }}
      >
        {children}
      </AppContext.Provider>
    )
  }

