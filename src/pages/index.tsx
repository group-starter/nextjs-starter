import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import jwt from 'jsonwebtoken'

const inter = Inter({ subsets: ['latin'] })

declare global {
  interface Window {
    google: any
    gapi: any
    grecaptcha: any
  }
}

const Home = () => {
  const handleCredentialResponse = (args: { credential: string }) => {
    const userInfoGG = jwt.decode(args.credential)
    console.log({
      userInfoGG,
      args
    })
  }

  const verifyCallback = (token: string) => {
    console.log(token)
  }

  // not have params
  const expiredCallback = () => {
    console.log('expired')
  }

  const errorCallback = () => {
    console.log('error')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // window.google.accounts.id.initialize({
      //   client_id: '670564527719-nvgcomg70ej1nu4jtfbedur97gleg1au.apps.googleusercontent.com',
      //   callback: handleCredentialResponse
      // })
      // window.google.accounts.id.renderButton(
      //   document.getElementById("buttonDiv"),
      //   { theme: "outline", size: "large" }  // customization attributes
      // );
      // window.google.accounts.id.prompt(); // also display the One Tap dialog

      try {
          window.grecaptcha.render("test", {
            sitekey: "6LcU_78lAAAAAHV7GRpa5CUbSXAaAwv6H5wf_vuR",
            callback: verifyCallback,
            'expired-callback': expiredCallback,
            'error-callback': errorCallback,
          })
      } catch(err) {
        console.log(err)
      }
      // const client = window.google.accounts.oauth2.initTokenClient({
      //   client_id: '670564527719-nvgcomg70ej1nu4jtfbedur97gleg1au.apps.googleusercontent.com',
      //   scope: 'https://www.googleapis.com/auth/userinfo.profile',
      //   callback: (tokenResponse: any) => {
      //     console.log(tokenResponse)

      //     var xhr = new XMLHttpRequest();
      //     xhr.onreadystatechange = function() {
      //         if (xhr.readyState == XMLHttpRequest.DONE) {
      //             alert(xhr.responseText);
      //         }
      //     }
      //     xhr.open('GET', 'https://www.googleapis.com/auth/userinfo.profile');
      //     xhr.setRequestHeader('Authorization', 'Bearer ' + tokenResponse.access_token);
      //     xhr.send();
      //   },
      // });
      // client.requestAccessToken()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div id="buttonDiv">buttonDiv</div>
          <div id="test">Submit</div>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Home
