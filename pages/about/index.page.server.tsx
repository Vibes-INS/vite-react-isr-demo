export async function onBeforeRender() {
  // @ts-ignore
  const d = await new Promise(r => {
    setTimeout(() => {
      r(String(new Date()))
    }, 1000)
  })
  return {
    pageContext: {
      pageProps: {
        d,
      },
    },
  };
}
