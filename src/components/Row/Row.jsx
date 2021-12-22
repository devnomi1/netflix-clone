import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css"

const base_Url = "http://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	console.log(movies);

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row-posters">
				{movies.map((movie) => (
					<img 
						key={movie.id}
						className={`row-poster ${isLargeRow&& "row-posterLarge"}`}
						src={`${base_Url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
