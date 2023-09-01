import {useEffect, useState} from 'react'
import api from '../services/api'
import {Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
import {Layout} from '../layouts/Layout'
import {PokemonCard} from './components/FetchingList/Pokemon.card'
import {LoadMoreCard} from './components/FetchingList/LoadMore.card'

export interface Pokemon {
  name: string,
  url: string
}

interface Response {
  count: number,
  next: string,
  previous: string,
  results: Pokemon[]
}

export const FetchList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>('')

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
      const response = await api.GET<Response>(api.pokemons)
      if (response) {
        setPokemons(response.results)
        setNext(response.next)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const loadMore = async () => {
    try {
      const response = await api.GET<Response>(next)
      if (response) {
        setPokemons([...pokemons, ...response.results])
        setNext(response.next)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout menuTitleSelected="Fetching list">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Mi Pokedex
          </Typography>
        </Grid>
        {
          !!pokemons && pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                position={index}
                urlDetails={pokemon.url}
                name={pokemon.name}
              />
            )
          })
        }
        <LoadMoreCard loadMore={loadMore}/>
      </Grid>
    </Layout>
  )
}
