"strict";

const posts = [
  { title: "post baslik 1", detay: "detay 1" },
  { title: "post baslik 2", detay: "detay 2" },
  { title: "post baslik 3", detay: "detay 3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title, post.detay);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showPosts() {
  try {
    await addPost({ title: "post baslik 4", detay: "detay 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
