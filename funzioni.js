export async function loadPosts() {
    const postResponce = await axios.get('https://asocial.cyberdelia.eu/api/v1/post')
    console.log("Post responce: " + postResponce.status);
    const userResponce = await axios.get('https://asocial.cyberdelia.eu/api/v1/user')
    console.log("User responce: " + userResponce.status);
    let main = document.getElementById('postsContainers');
    
    console.log(postResponce.data);
    console.log(userResponce.data);

    postResponce.data.forEach(post => {
        let postContainer = document.createElement('div');
        postContainer.classList.add('container');
        main.appendChild(postContainer);

        if(post.imgSrc){
            let img = document.createElement('img');
            img.src = post.imgSrc;
            postContainer.appendChild(img);
        }
            let contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
            postContainer.appendChild(contentDiv);
            if (post.content){
                let content = document.createElement('p');
                content.innerText = post.content;
                contentDiv.appendChild(content);
            }
            let detailDiv = document.createElement('div');
            detailDiv.classList.add('info');
            postContainer.appendChild(detailDiv);
            if (post.likes){    
                let likes = document.createElement('div');
                likes.innerText = post.likes.length + " Likes";
                detailDiv.appendChild(likes);
            }
            if (userResponce.data.find(user => user.id==post.authorId)){
                let author = document.createElement('div');
                author.innerText = userResponce.data.find(user => user.id==post.authorId).firstname + " " + userResponce.data.find(user => user.id==post.authorId).lastname;
                detailDiv.appendChild(author);
            }
            if (post.createdAt){
                let createdAt = document.createElement('div');
                createdAt.innerText = new Date(post.createdAt).toLocaleString();
                detailDiv.appendChild(createdAt);
            }
});};

export async function createUser(newUser) {
    const responce = await axios.post('https://asocial.cyberdelia.eu/api/v1/user', newUser)
    console.log(responce.status);
    return responce.data;
}
export async function updateUser(id, updatedUser) {
    const responce =await axios.patch('https://asocial.cyberdelia.eu/api/v1/user/' + id, updatedUser)
    console.log(responce.status);
    return responce.data;
}
export async function deleteUser(id) {
    const responce =await axios.delete('https://asocial.cyberdelia.eu/api/v1/user/' + id)
    console.log(responce.status);
}

export async function sendPost(newPost){
    const responce = await axios.post('https://asocial.cyberdelia.eu/api/v1/post', newPost)
    console.log(responce.status);
    return responce.data;
}

export async function updatePost(id, dati) {
    console.log(dati);   
    const responce = await axios.patch('https://asocial.cyberdelia.eu/api/v1/post/' + id, dati)
    console.log(responce.status);
    return responce.data;
}
export async function deletePost(id) {
    const responce =await axios.delete('https://asocial.cyberdelia.eu/api/v1/post/' + id)
    console.log(responce.status);
}
