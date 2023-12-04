'use client'

import { useState, useEffect } from 'react'

type Props = {
    title: string
}

export function Header(props: Props) {

    const [state, setState] = useState({
        title: props.title
    })

    useEffect(() => {
        setState({
            title: props.title
        })
    }, [])

    return (
        <>
            <header>
                <h1>{state.title}</h1>
            </header>
        </>
    )
}