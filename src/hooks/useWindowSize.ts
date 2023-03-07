/*
 * @Author: CaiPeng
 * @Date: 2023-03-03 15:39:45
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-03 15:50:37
 * @FilePath: \React\SelectDate\src\hooks\useWindowSize.ts
 * @Description: 
 */
import { useState, useEffect } from 'react'

function useWindowSize () {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize