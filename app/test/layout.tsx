export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav></nav>
            {children}
        </div>
    )
}