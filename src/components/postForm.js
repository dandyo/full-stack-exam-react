import { FormGroup, FormControl, InputLabel, TextField, FormHelperText } from '@mui/material';

const postForm = () => {
    return <>
        <FormGroup>
            <FormControl variant='standard'>
                <TextField label="Caption"></TextField>
            </FormControl>

        </FormGroup>
    </>
}

export default postForm