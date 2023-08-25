import {Layout} from '../layouts/Layout';
import React from 'react';
import {Grid} from '@mui/material';
import {ListTodoCard} from './components/Todo/ListTodo.card'

export const Todo = () => {

  return (
    <Layout menuTitleSelected="Tareas">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ListTodoCard/>
        </Grid>
      </Grid>
    </Layout>
  )
}
