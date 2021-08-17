export const loadPosts = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const imageResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [post, image] = await Promise.all([postResponse, imageResponse]);
    const postJson = await post.json();
    const imageJson = await image.json();

    const postAndImage = postJson.map((post, index) => {
      return {...post, cover: imageJson[index].url}
    })

    return postAndImage
} 