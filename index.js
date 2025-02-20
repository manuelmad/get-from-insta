const accessToken = 'ACCESS_TOKEN';
const postId = 'POST_ID';

async function getComments() {
    const url = `https://graph.instagram.com/${postId}/comments?access_token=${accessToken}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data.map(comment => comment.username);
        console.log(users);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

getComments();