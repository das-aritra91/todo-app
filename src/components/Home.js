import React, { useState } from 'react';
import FloatingActionButton from './FloatingAddButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
    const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
    return (
        <div>
           <Card style={{ margin: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <span style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
            Hello
            </span>
      </CardContent>
      <div>
        <IconButton aria-label="edit" onClick={() => onEdit(task)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(task)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
    <Card style={{ margin: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <span style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
            Hello2
            </span>
      </CardContent>
      <div>
        <IconButton aria-label="edit" onClick={() => onEdit(task)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(task)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
            <FloatingActionButton/>
        </div>
    );
}