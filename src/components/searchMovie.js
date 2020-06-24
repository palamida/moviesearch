import React from "react";

export default function SearchMovie() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const query = "ET";
    const url = `https://api.themoviedb.org/3/movie/550?api_key=c6ca484b05098f40fc5be3473e4421d1&language=en-US&query=${query}&page=1`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurrasic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
