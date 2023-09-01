import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'

export interface Props {
  loadMore(): void
}

export const LoadMoreCard = ({loadMore}: Props) => {

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          display: 'flex',
          height: 100,
          cursor: 'pointer',
          backgroundColor: '#5acdbd',
          alignItems: 'center'
        }}
        onClick={loadMore}
      >
        <CardContent sx={{flexGrow: 1}}>
          <Typography component="div" variant="h5" sx={{color: 'white'}}>
            Cargar Más
          </Typography>
        </CardContent>
        <CardMedia
          src="/images/pokemon.png"
          component="img"
          sx={{width: 100, p: 2}}
          alt="Cargar Más"
        />
      </Card>
    </Grid>
  )

}