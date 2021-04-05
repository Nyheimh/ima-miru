import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createShow } from '../../services/shows'

const CreateShow = ({ user }) => {
    const [show, setShow] = useState({
        title: '',
        plot: '',
        imgURL: '',
        duration: ''
    })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setShow({
            ...show,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createShow(show)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/shows`} />
    }
    return (
        <Layout user={user}>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    placeholder='Title'
                    value={show.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    className="input-duration"
                    placeholder='Duration'
                    value={show.duration}
                    name='duration'
                    required
                    onChange={handleChange}
                />
                <textarea
                    className="textarea-plot"
                    rows={10}
                    placeholder='Plot'
                    value={show.plot}
                    name='plot'
                    required
                    onChange={handleChange}
                />
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={show.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default CreateShow
