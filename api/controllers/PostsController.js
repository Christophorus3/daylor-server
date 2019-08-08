const post1 = {
  id: 1,
  title: "Post 1 Title",
  body: "This is one interesting post. I have no idea where all of this leads to."
}
const post2 = {
  id: 2,
  title: "Post 2 Title",
  body: "This is one interesting post. I have no idea where all of this leads to."
}
const post3 = {
  id: 3,
  title: "Post 2 Title",
  body: "This is one interesting post. I have no idea where all of this leads to."
}

const posts = [post1, post2, post3]

module.exports = {

  posts: function (req, res) {
    const postId = req.param("postId")

    if (postId) {
      let post = posts.filter( p => p.id == postId)

      res.send(post)
    } else {
      res.send(posts)
    }
  },

  create: function (req, res) {
    const id = req.param("id")
    const title = req.param("title")
    const body = req.param("body")

    const newPost = {id, title, body}

    posts.push(newPost)

    sails.log.debug(title + " " + body)

    res.end()
  }

}