"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = require("dayjs");
var relativeTime_1 = require("dayjs/plugin/relativeTime");
dayjs_1.default.extend(relativeTime_1.default);
var url = new URL('https://fwd.innopolis.university/api/hw2');
url.searchParams.set('email', 'a.qodirzoda@innopolis.university');
var myid;
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    myid = data;
    console.log(myid);
    var comic_url = new URL('comic', url);
    comic_url.searchParams.set('id', myid);
    console.log(comic_url.href);
    var mydata;
    fetch(comic_url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        mydata = data;
        console.log(mydata);
        var comicContainer = document.getElementById('comic-container');
        if (comicContainer) {
            var title = document.createElement('h1');
            title.textContent = mydata.safe_title;
            comicContainer.appendChild(title);
            var img = document.createElement('img');
            img.src = mydata.img;
            img.alt = mydata.alt;
            comicContainer.appendChild(img);
            var date = document.createElement('p');
            var publishedDate = new Date(mydata.year, mydata.month - 1, mydata.day);
            var dayjsPublishedDate = (0, dayjs_1.default)(publishedDate);
            console.log(dayjsPublishedDate);
            var timeAgo = dayjsPublishedDate.fromNow();
            date.textContent = "Published on ".concat(publishedDate.toDateString(), " ");
            comicContainer.appendChild(date);
        }
    })
        .catch(function (error) {
        console.error(error);
    });
})
    .catch(function (error) {
    console.error(error);
});
