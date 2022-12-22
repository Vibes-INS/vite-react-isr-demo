import './code.css'

export { Page }

function Page(props: { d: string }) {
  return (
    <>
      <h1>About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
        {props.d}
      </p>
    </>
  )
}

export const clientRouting = true
