import './code.css'

export function Page(props: { d: string, fact: string }) {
  return (
    <>
      <h1>About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
        {props.d}
      </p>
      <p>
        {props.fact}
      </p>
    </>
  )
}

export const isr = { expiration: 15 };
export const clientRouting = true
