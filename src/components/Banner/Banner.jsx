import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./Banner.css";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOrignals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

     function truncate(str, n) {
				return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    
    console.log(movie);
    
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="banner-contents">
				<h1 className="banner-title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner-buttons">
					<button className="banner-button">Play</button>
					<button className="banner-button">My List</button>
				</div>
				<h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner-fadeBottom" />
		</header>
	);
}

export default Banner;
