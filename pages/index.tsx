import Link from 'next/link'
import Layout from '../components/Layout'
import Input from '../components/Input'
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Input name="size" label="size" placeholder="medium" />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
