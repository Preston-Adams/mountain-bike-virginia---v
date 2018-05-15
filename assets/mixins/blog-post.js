import {headTags, buildVideo} from '../functions'
import {s3Pages} from '../../scripts/routes'

export default {
  async asyncData(context) {
    let route
    if (context.route.matched.length === 1) {
      route = context.route.matched[0].path.slice(1)
    } else {
      let routeSplit = route.split('/')
      let routeSplitNoSlashes = []
      routeSplit.forEach(route => {
        if (route !== '') {
          routeSplitNoSlashes.push(route)
        }
      })
      route = routeSplitNoSlashes.join('/')
    }

    await context.store.dispatch('loadPosts', [
      route
    ])
    const currentPost = context.store.getters.getPost(route)
    context.store.dispatch('setCurrentPost', currentPost)

    await context.store.dispatch('loadPosts',
      currentPost.relatedPosts
    )

    const postInstance = {
      post: currentPost,
      relatedPosts: context.store.getters.getPosts(
        currentPost.relatedPosts
      ),
      img: `${s3Pages}/${route}/`
    }

    if (currentPost.ytSrc) {
      postInstance.schema = await buildVideo(currentPost)
    }

    return postInstance
  },
  head() {
    if (!this.postAtBottom &&
        this.post) {
      return this.blogHeadTags(this.post)
    } else if (this.postAtBottom &&
               this.$store.state.posts.currentPost) {
      return this.blogHeadTags(this.$store.state.posts.currentPost)
    }
  },
  props: {
    // This is for when it is a related post
    postAtBottom: {
      type: Object,
      required: false
    }
  },
  created() {
    if (this.postAtBottom) {
      this.post = this.postAtBottom
      this.relatedPosts = []
      this.img = `${s3Pages}/${this.post.route}/`
    }
  },
  methods: {
    blogHeadTags(post) {
      if (this.schema) {
        return {
          ...headTags(
            post.title,
            post.subtitle,
            post.keywords,
            post
          ),
          script: this.schema
        }
      } else {
        return headTags(
          post.title,
          post.subtitle,
          post.keywords,
          post
        )
      }
    }
  }
}