// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// function Detail() {
//   const { id } = useParams();

//   const getMovies = async function () {
//     try {
//       const res = await fetch(
//         `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
//       );

//       const json = await res.json();

//       console.log(json);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return <h1>Detail</h1>;
// }
// export default Detail;
