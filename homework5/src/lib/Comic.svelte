<script lang="ts">
    interface ComicData{
    safe_title: string; 
    img: string; 
    alt: string; 
    year: number; 
    month: number; 
    day: number;  
    }
    export let data: ComicData;
    import dayjs from "dayjs"; 
    import relativeTime from "dayjs/plugin/relativeTime";
  </script>
  <div class="comic-container">
    <h1>{data.safe_title}</h1>
    <img src={data.img} alt={data.alt}>
    <p>
      Published on {new Date(data.year, data.month - 1, data.day).toDateString()} (
      {dayjs(new Date(data.year, data.month - 1, data.day)).fromNow()})
    </p>
  </div>
  