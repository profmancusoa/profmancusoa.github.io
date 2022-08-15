<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/blog/post.json')
      const allPosts = await posts.json()

      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>

<script>
    export let posts;
</script>



<h1>Welcome to SvelteKit!!!!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
    {#each posts as post}
      <li>
        <h2>
          <a href="{post.path}">
            {post.meta.title}
          </a>
        </h2>
        Published: {post.meta.date}
        Autore: {post.meta.autore}
      </li>
    {/each}
</ul>
