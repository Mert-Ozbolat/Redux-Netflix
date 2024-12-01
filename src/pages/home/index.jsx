import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Error from '../../components/error';
import Loader from '../../components/loader';
import MoviList from './MoviList';
import api from '../../api';

const Home = () => {

    const [genres, setGenres] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api
            .get("/genre/movie/list?language=en")
            .then((res) => setGenres(res.data.genres))
            .catch((err) => setError(err.message))
    }, [])

    return (
        <div>
            <Hero />
            {
                error ? <Error info={error} /> : !genres ? <Loader /> :
                    <div>
                        <div>
                            {
                                genres?.map((i) => (
                                    <MoviList key={i.id} genre={i} />
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home