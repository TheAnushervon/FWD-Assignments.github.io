
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

interface ComicData {
    safe_title: string; 
    img: string; 
    alt: string; 
    year: number; 
    month: number; 
    day: number; 

}
let url = new URL('https://fwd.innopolis.university/api/hw2')
url.searchParams.set('email', 'a.qodirzoda@innopolis.university')

let myid: string ; 

fetch(url)
    .then(response => response.json())
    .then(data =>{ myid = data; 
        console.log(myid);

    let comic_url = new URL('comic', url) ; 
    comic_url.searchParams.set('id', myid); 

    console.log(comic_url.href); 

    let mydata: ComicData; 

    fetch(comic_url)
        .then (response => response.json())
        .then(data => {
            mydata = data ; 
            console.log(mydata) ; 
            
            const comicContainer = document.getElementById('comic-container'); 
            
            if (comicContainer)  {
                const title = document.createElement('h1'); 
                title.textContent = mydata.safe_title; 
                comicContainer.appendChild(title) ; 
                
                const img = document.createElement('img'); 
                img.src = mydata.img; 
               
                img.alt = mydata.alt; 
                comicContainer.appendChild(img) ;
            
                const date = document.createElement('p');
                const publishedDate = new Date(mydata.year, mydata.month - 1, mydata.day);
                const dayjsPublishedDate = dayjs(publishedDate);
             
                const timeAgo = dayjsPublishedDate.fromNow();
                date.textContent = `Published on ${publishedDate.toDateString()} ${timeAgo}`;
                comicContainer.appendChild(date); 
    }})
            .catch(error=>{
                console.error(error); 
            }); 
        })
        .catch(error => {
            console.error(error); 
        })
    
            