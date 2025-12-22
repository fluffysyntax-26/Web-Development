function fetchPostData(){ 
    return new Promise((resolve) => { 
        setTimeout(()=>{ 
            resolve("Post Data fetched")
        }, 4000); 
    })
}

function fetchCommentData(){ 
    return new Promise((resolve) => { 
        setTimeout(()=>{ 
            resolve("Comment Data fetched")
        }, 4000); 
    })
}

async function getBlogData(){ 
    try {
        console.log("Fetching blog data"); 
        // const blogData = await fetchPostData(); 
        // const commentData = await fetchCommentData(); 

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ])

        console.log("Blog Data fetched successfully")
        
    } catch (error) {
        console.error("error fetching blog data")
    }
}

getBlogData()