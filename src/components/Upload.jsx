import React from 'react'
import { useState } from 'react';
import axios from 'axios'


const Upload = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    let API_KEY = 'd2f82e48b754478c9bcb391cdc08e32d'
    let URL = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${search}&full_page="true"&fresh="true"`
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            let response = await axios.get(URL)
            setSearch('')
            let url = response.config.url;
            console.log(url)
            setLoading(false)
            setImgUrl(url)

        } catch (error) {
            setError(true)
            console.error(error)

        }

    }
    return (
        <div>
            <>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Enter the Url
                    </h2>
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>

                            <div className="mt-2">
                                <input
                                    id="search"
                                    name="search"
                                    type="search"
                                    autoComplete="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Generate Screenshot
                            </button>
                            {loading && <div>
                                Loading....</div>}
                            {error && <div>
                                an error occured, please retry....</div>}
                        </div>
                    </form>


                </div>
            </>

            {imgUrl && <img src={imgUrl} className='w-full mt-2' />}
        </div>
    )
}

export default Upload