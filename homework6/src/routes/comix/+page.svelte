<script lang="ts">
    import Comic from '$lib/Comic.svelte';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
  
    dayjs.extend(relativeTime);
  
    interface ComicData {
      safe_title: string;
      img: string;
      alt: string;
      year: number;
      month: number;
      day: number;
    }
  
    let myid: string;
    let mydata: ComicData;
  
    // Fetch data from API
    const fetchData = async () => {
      const url = new URL('https://fwd.innopolis.university/api/hw2');
      url.searchParams.set('email', 'a.qodirzoda@innopolis.university');
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        myid = data;
  
        const comic_url = new URL('comic', url);
        comic_url.searchParams.set('id', myid);
  
        const comicResponse = await fetch(comic_url);
        const comicData = await comicResponse.json();
        mydata = comicData;
      } catch (error) {
        console.error(error);
      }
    };
  
    // Fetch data when component is mounted
    fetchData();
  </script>
  
  <!-- <div class="comic-page">
    {#if mydata}
      <Comic {mydata} />
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
   -->
  <style>
    .comic-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
  