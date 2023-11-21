import Link from 'next/link'

export default function Test() {
    return (
        <>
            <h1>Hello Test Page!</h1>
            <Link href={'./settings'}>setting</Link>
        </>
    )
}