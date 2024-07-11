
<script lang="ts">
    import About from '$lib/About.svelte';
    import Portfolio from '$lib/Portfolio.svelte';
    import Contact from '$lib/Contact.svelte';
    import Header from '$lib/Header.svelte'; 
    import Comic from '$lib/Comic.svelte'; 
    let showComic = false;

	const toggleComic = () => {
		showComic = !showComic;
	};
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
     <!-- Font Awesome CSS -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
</head>

    <div id = "header">
       <Header />  
    </div>
    <!-- -----------about --->


    <div id= "about">
        <About /> 
    </div>
    
    <div id = "portfolio">
    
        <Portfolio /> 
    </div>
    <!-- -------------------Contact---------- -->

    <div id = "contact">
        <Contact /> 
        </div>
        <div class = "copyright">
            <p style="color:red; text-align:center">© 2024 Anushervon Qodirzoda. All rights reserved.
                <h3 style="color: red; margin-top:35px">    
                </h3>
        </div>
    <div id = "comic-button" style="text-align:center">
        <a href="#comic-button" on:click={toggleComic} class="comic-button" style="display: inline-block; padding: 10px 20px; background-color: red; color: white; border: none; border-radius: 4px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer;">
            {showComic ? 'Hide Comic' : 'Show Comic'}
        </a>
        {#if showComic}
		<Comic email="a.qodirzoda@innopolis.university" />
	{/if}
    </div>
