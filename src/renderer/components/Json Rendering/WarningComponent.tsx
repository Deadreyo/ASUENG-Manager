import { useEffect } from "react"
import { modifyWarningsCount } from "../Json Overview/WarningsCount";

export default function WarningComponent({title}: {title: string}) {

  useEffect( () => {
    modifyWarningsCount(1);
    return () => modifyWarningsCount(-1);
  }, [])

  return (
    <>
      {" "}<i className="fa-solid fa-lightbulb" title={`Warning: ${title}`} />
    </>
  )
}
