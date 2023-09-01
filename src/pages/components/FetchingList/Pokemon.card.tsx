import {Card, CardContent, CardMedia, Grid, CircularProgress, Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import api from '../../../services/api'
import {useState} from 'react'
import {PokemonDetailDialog} from './PokemonDetail.dialog'

interface Props {
  name: string
  position: number
  urlDetails: string
}

export interface PokemonDetail {
  name: string
  height: number
  weight: number
  abilities: Ability[]
  moves: Mfe[]
  sprites: Sprites
  types: Type[]
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface Mfe {
  move: Move
}

export interface Move {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

export const PokemonCard = ({name, urlDetails, position}: Props) => {
  const [loading, setLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail | null>(null);

  let pokemonId = String(position + 1);

  if (pokemonId.length === 1) {
    pokemonId = '00' + pokemonId;
  } else if (pokemonId.length === 2) {
    pokemonId = '0' + pokemonId;
  }

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await api.GET<PokemonDetail>(urlDetails)
      if (response) {
        setPokemonDetails(response)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      <Grid item xs={4}>
        {loading
          ?
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5acdbd',
            minHeight: '100px'
          }}>
            <CircularProgress sx={{color: 'white'}}/>
          </Box>
          :
          <Card
            sx={{
              display: 'flex',
              cursor: 'pointer',
              '&:hover': {backgroundColor: '#5acdbd', color: 'white'}
            }}
            onClick={() => handleClick()}
          >
            <CardContent sx={{flexGrow: 1}}>
              <Typography component="div" variant="h5">
                N° {pokemonId}
              </Typography>
              <Typography
                component="div"
                variant="h5"
                sx={{textTransform: 'capitalize'}}
              >
                {name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{width: 100}}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
              alt={name}
            />
          </Card>
        }
      </Grid>
      {
        !!pokemonDetails && <PokemonDetailDialog {...pokemonDetails}/>
      }
    </>
  )
}
