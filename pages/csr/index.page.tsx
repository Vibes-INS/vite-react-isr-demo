import  {useEffect, useState} from 'react'
import {Routers} from "../../route";
import {useFakeAuthContext} from "../../renderer/useFakeAuthContext";

export { Page }

function Page() {
  const [isRender, setIsRender] = useState(false)
  const context = useFakeAuthContext()

  console.log('current JWT: ', context?.jwt)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsRender(true);
    }
  }, [])

  return (
    <>
      {isRender ? <Routers/> : null}
    </>
  )
}

export const clientRouting = true
