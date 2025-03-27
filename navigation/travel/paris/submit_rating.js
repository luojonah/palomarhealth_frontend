const fetchOptions = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, omit
};

document.getElementById('ratingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const postId = document.getElementById('post_id').value;
    const rating = document.getElementById('rating').value;

    async function submitVote(postId, rating) {
        try {
            const response = await fetch(`http://127.0.0.1:8101/api/rate`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-': 'application/json' },
                body: JSON.stringify({ post_id: postId, rating: rating })
            });
    
            if (!response.ok) throw new Error('Failed to submit vote: ' + response.statusText);
    
    
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    }

    submitVote(postId, rating);
});