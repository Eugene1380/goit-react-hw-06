import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFilmReviews } from '../movies-api';
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
    const { movieId } = useParams(); //отримуєм параметр movieId із URL
    const [reviews, setReviews] = useState([]);
    
    //useEffect викличеться кожного разу, коли movieId змінюється
    useEffect(() => {
        if (!movieId) return;

        async function getReviews() {
            try {
                const data = await getFilmReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                console.log("error-MovieReviews >> ", error);
            }
        }
        getReviews();
        }, [movieId]);

    return (
        <div>
        <h3>Review</h3>
        <ul className={css.reviewsList}>
            {reviews.map(review => (
                <li key={review.id} className={css.reviewsItem}>
                    <p className={css.author}>Author: {review.author}</p>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}