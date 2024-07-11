<script lang="ts">
	import type ComicData from './types';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let email: string;

	let comicData: ComicData = {
		safe_title: '',
		img: '',
		month: 0,
		day: 0,
		year: 0,
		alt: ''
	};
	const params: URLSearchParams = new URLSearchParams({ email: email });

	fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
		.then((response) => response.json())
		.then((data) => {
			const comicId = data;
			const url_params = new URLSearchParams({ id: comicId });

			fetch('https://fwd.innopolis.university/api/comic?' + url_params.toString())
				.then((response) => response.json())
				.then((data: ComicData) => {
					comicData = data;
					console.log(comicData);
				});
		});

	$: comicDate = new Date(comicData.year, comicData.month, comicData.day).toLocaleDateString();

	$: relative_time = dayjs(comicData.year + '-' + comicData.month + '-' + comicData.day).fromNow();
</script>

<body>
	<div id="comicContainer">
		<h2>{comicData.safe_title || 'Loading...'}</h2>
		<img src={comicData.img} alt={comicData.alt} />
		<p>Published at {comicDate} {relative_time}</p>
	</div>
</body>

<style>
	body {
		text-align: center;
		font-size: large;
		font-family: monospace;
	}
</style>
