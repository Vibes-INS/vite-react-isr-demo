import './code.css'

export const isr = { expiration: 15 };

export function Page(props: { d: string, fact: string }) {
  return (
    <>
      <h1>About</h1>
      <p>
        ISR: regenerated after {isr.expiration} seconds
      </p>
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

