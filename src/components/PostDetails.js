import { usePostsContext } from "../hooks/usePostsContext"
import { Button, Typography, Card, CardContent } from '@mui/material';

const PostDetails = ({ post }) => {
    const { dispatch } = usePostsContext()

    const handleClick = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/posts/' + post._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_POST', payload: json })
        }
    }
    return (<Card sx={{ marginBottom: 2 }} key={post._id}>
        <CardContent>
            <Typography sx={{}} gutterBottom>
                {post.caption}
                {/* {post.image} */}
            </Typography>
            <Button variant="contained" onClick={handleClick}>Delete</Button>
        </CardContent>
    </Card>);
}

export default PostDetails