module.exports = {

  posts: async function(req, res) {
    const postId = req.param("postId")

    if (postId) {
      try {
        let post = Post.findOne({ id: postId })
        res.send(post)
      } catch (error) {
        res.serverError(error)
      }
    } else {
      try {
        let posts = await Post.find()
        res.send(posts)
      } catch (error) {
        res.serverError(error)
      }
    }
  },

  create: async function(req, res) {
    const title = req.body.title
    const body = req.body.body

    sails.log.debug("Creating Post: " + title + " " + body)

    try {
      await Post.create({title, body})
      sails.log.debug("finished creating post")
      res.ok()
    } catch (error) {
      res.serverError(error)
    }
  },

  update: async function(req, res) {
    const id = req.param("postId")
    const title = req.body.title
    const body = req.body.body

    try {
      let post = await Post.update({ id }).set({ title, body })
      res.send(post)
    } catch (error) {
      res.serverError(error)
    }
  },

  delete: async function(req, res) {
    const id = req.param("postId")

    try {
      await Post.destroy({ id })
      sails.log.debug("deleted post with id: " + id)
      res.ok()
    } catch (error) {
      res.serverError(error)
    }
  }
}