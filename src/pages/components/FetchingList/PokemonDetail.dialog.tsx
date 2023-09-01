import {useState} from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {PokemonDetail} from './Pokemon.card'


export const PokemonDetailDialog = ({name, height, weight, abilities, moves, sprites, types}: PokemonDetail) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle sx={{textTransform: 'capitalize'}}> {name} </DialogTitle>
      <DialogContent>
        <Box sx={{display: 'flex'}}>
          <Avatar
            alt={name}
            src={sprites.front_default}
            sx={{width: 200, height: 200}}
          />
          <Box flexDirection={'row'}>
            <Typography pl={2}>
              Peso: {weight} <br/>
              Altura: {height} <br/>
              Tipos:
              {
                types.map(type => '[' + type.type.name + '] ')
              }
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Habilidades
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {abilities.map((ability) => (
                  <Typography>
                    {ability.ability.name}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Movimientos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {moves.map((move) => (
                  <Typography>
                    {move.move.name}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>

        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>

  )
}