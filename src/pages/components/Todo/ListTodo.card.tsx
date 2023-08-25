import {Button, Card, CardContent, CardHeader, Checkbox} from '@mui/material'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import React from 'react'
import {appActions, appSelector} from '../../../redux/appRedux'
import CancelIcon from '@mui/icons-material/Cancel'
import {useDispatch, useSelector} from 'react-redux'
import {CreateTodoButton} from './CreateTodoButton'

export const ListTodoCard = () => {

  const dispatch = useDispatch()
  const todos = useSelector(appSelector.todo)

  const deleteTask = (id: string) => {
    dispatch(appActions.deleteTodo(id))
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(appActions.setCompletedTodo({id, completed: e.target.checked}))
  }

  const columns: GridColDef[] = [
    {
      field: 'completed',
      headerName: '¿Completa?',
      renderCell: ({row}) => (
        <Checkbox checked={row.completed} onChange={e => handleChecked(e, row.id)}/>
      )
    },
    {field: 'text', headerName: 'Descripción', flex: 1},
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: ({row}) => (
        <Button
          color="error"
          variant="outlined"
          size="small"
          onClick={() => deleteTask(row.id)}
          startIcon={<CancelIcon/>}
        >
          Eliminar
        </Button>
      ),
      width: 150
    }
  ]
  return (
    <Card>
      <CardHeader title="Tareas" action={<CreateTodoButton/>}/>
      <CardContent>
        <DataGrid
          autoHeight
          density="compact"
          rows={todos}
          columns={columns}
          disableRowSelectionOnClick
          hideFooter
        />
      </CardContent>
    </Card>
  )
}