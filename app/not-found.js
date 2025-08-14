import Link from 'next/link'
import css from '../styles/not-found.css'

function notFound() {
  return (
    <div className='container-404'>
        <h1 className='title-404'>404 <br /> Page Not Found</h1>
        <Link href={'/'} className='btn-404'>Home</Link>
    </div>
  )
}

export default notFound