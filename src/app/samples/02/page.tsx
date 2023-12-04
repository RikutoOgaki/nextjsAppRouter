'use client'

import style from '@/styles/samples/02/page.module.scss'
import { useState } from 'react'

type State = {
    value1: string,
    value2: string,
    result: number
}

export default function Sample02() {

    const [state, setState] = useState<State>({
        value1: '',
        value2: '',
        result: 0
    })

    return (
        <>
            <div className={style.wrap}>
                <p>{state.result}</p>
                <input type="text" value={state.value1}
                    onChange={(e) => setState({
                        ...state,
                        value1: e.target.value
                    })}
                />
                <input type="text" value={state.value2}
                    onChange={(e) => setState({
                        ...state,
                        value2: e.target.value
                    })}
                />
                <button
                    onClick={() => {
                        let num1 = Number(state.value1)
                        let num2 = Number(state.value2)

                        setState({
                            ...state,
                            result: num1 + num2
                        })
                    }}
                >計算</button>
            </div>
        </>
    )
}