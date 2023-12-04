'use client'

import style from '@/styles/samples/01/page.module.scss'
import { useState } from 'react'

export default function Sample01() {

    const [state, setState] = useState('')

    return (
        <>
            <div className={style.wrap}>
                <p>{state}</p>
                <input type="text" value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
        </>
    )
}