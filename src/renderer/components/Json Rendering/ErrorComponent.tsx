
export default function ErrorComponent({title}: {title: string}) {

  return (
    <>
      {" "}<i className="fa-solid fa-triangle-exclamation" title={title} />
    </>
  )
}
