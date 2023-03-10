import Head from 'next/head'
import styles from '@/styles/Register.module.css'
import path from 'path'
import { api_prefix } from '@/config'
import { RegisterForm } from '@/components/RegisterForm';

type Props = ReturnType<typeof getStaticProps>['props'];

export function getStaticProps() {
  return {
    props: {
      api_endpoint: path.join(api_prefix, 'register')
    }
  }
}

export default function Register({ api_endpoint }: Props) {


  return (
    <>
      <Head>
        <title>NewtNet | Register</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <RegisterForm
          api_endpoint={api_endpoint}
          redirect_url='/login'
        ></RegisterForm>
      </main>
    </>
  )
}
