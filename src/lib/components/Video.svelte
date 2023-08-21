<script>
    export let video_url;

</script>
<div class="video">
    <iframe src="{video_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<style>
    iframe {
        width: 100%;
        aspect-ratio: 16/9;
    }

    .video {
        width: 80%;
        aspect-ratio: 16/9;
        margin: auto;
    }
</style>