import { useState } from 'react'
import { FormGroup, FormControl, TextField } from '@mui/material';
import { usePostsContext } from "../hooks/usePostsContext"

const PostForm = () => {
    const { dispatch } = usePostsContext()

    const [caption, setCaption] = useState('')
    const [image, setImage] = useState('image')
    const [userid, setUserid] = useState('1')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = { caption, image, userid }

        const response = await fetch(process.env.REACT_APP_API_URL + '/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCaption('')
            dispatch({ type: 'CREATE_POST', payload: json })
        }

    }

    return <>
        <form onSubmit={handleSubmit}>
            <FormGroup sx={{ marginBottom: 2 }}>
                <FormControl variant='standard'>
                    <TextField label="What's on your mind?" onChange={(e) => { setCaption(e.target.value) }}>{caption}</TextField>
                </FormControl>
            </FormGroup>
        </form >
    </>
}

export default PostForm