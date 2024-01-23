import { Link } from "react-router-dom"

//#region Styles
const centerDivStyles = "page-conatiner text-center m-auto";
const headerStyles = "text-3xl pb-5 text-primary font-semibold";
const textStyles = "text-xl mb-8 text-unamed-50";
const linkStyles = "text-xl p-2 text-accent border border-accent rounded hover:text-accentl hover:border-accentl";
//#endregion

function Error404Page() {
  return (
    <div className='page-root'>
        <div className={centerDivStyles}>
            <h1 className={headerStyles}>Page not found</h1>
            <p className={textStyles}>Are you lost?</p>
            <Link className={linkStyles} to='/'>Go Home</Link>
        </div>
    </div>
  )
}

export default Error404Page;
