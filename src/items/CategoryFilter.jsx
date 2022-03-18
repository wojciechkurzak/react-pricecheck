import {useContext} from 'react'
import UserContext from '../UserContext'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

//Styling for select 

const SelectCategoryStyle = {
    '&': {
        color: '#fff',
        minWidth: '160px',
        backgroundColor: '#222'
    },
    'label': {
        color: '#fff'
    },
    '.MuiSelect-select':{
        color: '#fff'
    },
    'label.Mui-focused':{
        color: '#fff'
    },
    'svg': {
        color: '#fff'
    },
    '.MuiFilledInput-underline::after': {
        borderBottomColor: '#fff'
    },
}

const CategoryFilter = ({category, setCategory, setSub}) => {
    const data = useContext(UserContext)

    //Changing value of subcategory to empty string if category isn't set

    const setValues = (e) => {
        setCategory(e.target.value)
        setSub('')
    }

    //All possible main categories

    const categories = [...new Set(data.prices.values.map(e => e[0]))].slice(1)

    return (
        <div className='categoryFilter'>
            <FormControl variant="filled" sx={SelectCategoryStyle}>
            <InputLabel>Category</InputLabel>
            <Select
                value={category}
                onChange={setValues}
                label="Category"
            >   
                <MenuItem value={''}>None</MenuItem>
                {categories.map((e) => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>
            </FormControl>
        </div>
    )
}

export default CategoryFilter