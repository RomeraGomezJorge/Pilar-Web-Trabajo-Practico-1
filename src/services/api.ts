import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'
export const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

const headers: () => AxiosRequestConfig = () => ({
  headers: {
    'Content-Type': 'application/json'
  }
})

interface ErrorResponse {
  message: string
  name: string
  statusCode: number
}

const errorMessage: ErrorResponse = {
  message: 'Error en el servidor',
  name: 'serverError',
  statusCode: 500
}

const POST = async <T>(url: string, payload: any): Promise<T | null> => {
  try {
    const res: AxiosResponse<T> = await axios.post(url, payload, headers())
    return res.data || null
  } catch (error: any) {
    throw (error.response?.data?.error as ErrorResponse) || errorMessage
  }
}

const GET = async <T>(url: string): Promise<T | null> => {
  try {
    const res: AxiosResponse<T> = await axios.get(url, headers())
    return res.data || null
  } catch (error: any) {
    throw (error.response?.data?.error as ErrorResponse) || errorMessage
  }
}

const PATCH = async <T>(url: string, payload: any): Promise<T | null> => {
  try {
    const res: AxiosResponse<T> = await axios.patch(url, payload, headers())
    return res.data || null
  } catch (error: any) {
    throw (error.response?.data?.error as ErrorResponse) || errorMessage
  }
}

const DELETE = async <T>(url: string): Promise<T | null> => {
  try {
    const res: AxiosResponse<T> = await axios.delete(url, headers())
    return res.data || null
  } catch (error: any) {
    throw (error.response?.data?.error as ErrorResponse) || errorMessage
  }
}

export default {
  POST,
  GET,
  PATCH,
  DELETE,
  pokemons: `${BASE_URL}/pokemon`
}