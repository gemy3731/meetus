import { useState } from "react"
import { baseurl } from "../data/sharedData"
import Cookies from "js-cookie"
const API_URL = baseurl
const useAPI = () => {
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('token') || ''
    const GET = async (endpoint: string) => {
        console.log("toekn:", token);
        try {
            setLoading(true)
            const response = await fetch(API_URL + endpoint,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setLoading(false)
            return data
        } catch (error) {
            console.log(error)
            setLoading(false)
            return null;
        }
    }
    const POST = async (endpoint: string, body: object) => {
        console.log("POST body:", body);
        try {
            setLoading(true)
            const response = await fetch(API_URL+endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                },
                body: JSON.stringify(body),
            })
            const data = await response.json()
            setLoading(false)
            return data
        } catch (error) {
            console.log(error)
            setLoading(false)
            return null
        }
    }
  return {GET, POST, loading}
}

export default useAPI