import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from '@mui/material'
import {v4 as uuid} from 'uuid'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {appActions} from '../../../redux/appRedux'

export const CreateTodoButton = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [blur, setBlur] = useState(false)
  const showError = blur && text === ''

  const handleBlur = () => {
    setBlur(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text !== '') {
      addTask()
      handleClose()
    }
  }

  const addTask = () => {
    dispatch(appActions.addTodo({text, id: uuid()}))
    setText('')
    setBlur(false)
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen} startIcon={<AddCircleIcon/>}>
        Crear
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Crear Tarea</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  value={text}
                  label="Descripción"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{mt: 1}}
                  fullWidth
                  required
                  error={showError}
                  helperText={showError ? 'Este campo es requerido.' : ''}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose}>
                Cerrar
              </Button>
              <Button type="submit" variant="contained" disabled={text === ''} startIcon={<AddCircleIcon/>}>
                Guardar
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

    </>
  )
}