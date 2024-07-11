<!-- src/routes/+layout.svelte -->
<script lang="ts">
    export let data: {
      title?: string;
      description?: string;
    };
  </script>
  
  <svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{data.title ?? 'Personal Portfolio'}</title>
    <link rel="stylesheet" href="/styles/global.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  </svelte:head>
  
  <slot />
  