import axios from "axios";

export async function onBeforeRender() {
  const fact = await axios.get(`https://catfact.ninja/fact`)
    .then(d => d.data.fact)
    .catch(err => {
      console.log(err)
      return 'error'
    })

  return {
    pageContext: {
      pageProps: {
        d: String(new Date()),
        fact,
      },
    },
  };
}
