/*
 * @Author: CaiPeng
 * @Date: 2023-03-03 14:36:52
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-03 14:59:05
 * @FilePath: \SelectDate\src\utils\hooks\useFetch.ts
 * @Description: 
 */
import { useState, useEffect } from 'react'

const UseFetch = (url: string, params = {}, others: object) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch({
        url,
        body: params
      } as  Request)
      const data = response.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { data, loading };
}

export default UseFetch