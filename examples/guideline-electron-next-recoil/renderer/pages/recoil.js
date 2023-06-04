import Counter from '../components/counter'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/recoil">
          <a>With Recoil</a>
        </Link>
      </nav>

      <Counter />
    </div>
  )
}

export default IndexPage
