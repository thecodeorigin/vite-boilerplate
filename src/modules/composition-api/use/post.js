import { ref } from 'vue'

/**
 * Posts data
 */
const posts = ref([])

/**
 * Fetch all posts
 */
const fetchPosts = () => {/** Fetch the posts */ console.log('Fetch posts');}

/**
 * Delete specific post
 */
const deletePosts = (id) => {/** Fetch the posts */ console.log('Delete post ' + id);}

export default {
  posts,
  fetchPosts,
  deletePosts
}
