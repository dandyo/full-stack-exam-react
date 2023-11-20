import { useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { usePostsContext } from "../hooks/usePostsContext"

import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import PostForm from "../components/postForm";

function Home() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const { posts, dispatch } = usePostsContext()
    // const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL + '/api/posts')
            const json = await response.json()

            if (response.ok) {
                // setWorkouts(json)
                dispatch({ type: 'SET_POSTS', payload: json })
            }
        }

        fetchPosts()
    }, [dispatch])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return <>
        <Box
            sx={{
                maxWidth: 400,
                width: '100%',
                margin: '0 auto'
            }}
        >
            <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
                Poster
            </Typography>

            {!isAuthenticated && <Button variant="outlined" sx={{ marginBottom: 2 }} href="/login">Login</Button>}
            {isAuthenticated && <Button variant="outlined" onClick={handleLogout} sx={{ marginBottom: 2 }}>Logout</Button>}
            {isAuthenticated && <PostForm />}

            {posts && posts.map((post) => (
                // <WorkoutDetails key={workout._id} workout={workout} />
                <Card sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography sx={{}} gutterBottom>
                            {post.caption}
                            {post.image}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box >
    </>
}

export default Home;