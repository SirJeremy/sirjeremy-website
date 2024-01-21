import { Link } from "react-router-dom"

//#region Styles
const basePageStyles = "flex bg-slate-600 text-slate-100 w-full h-full grow";
const centerDivStyles = "m-auto text-center";
const headerStyles = "text-3xl pb-5";
const textStyles = "text-xl mb-5";
const linkStyles = "text-xl p-2 text-blue-200 border border-blue-200 rounded hover:text-blue-400 hover:border-blue-400";
//#endregion

function Error404Page() {
  return (
    <div className={basePageStyles}>
        <div className={centerDivStyles}>
            <h1 className={headerStyles}>Page not found</h1>
            <p className={textStyles}>Are you lost?</p>
            <Link className={linkStyles} to='/'>Go Home</Link>
        </div>
    </div>
  )
}

export default Error404Page;
