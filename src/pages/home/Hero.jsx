import React, { useEffect } from 'react'

const Hero = () => {

    useEffect(() => {
        api.get("/movie/popular")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>Hero</div>
    )
}

export default Hero