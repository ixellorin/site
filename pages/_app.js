import '../styles/global.scss'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
            <meta charSet="utf-8" property="og:url" content="http://www.printr.ca/" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            {/* <!--
                manifest.json provides metadata used when your web app is installed on a
                user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
            -->
            <!-- Import jQuery --> */}
            <script src="jquery-3.5..min.js"></script>

            {/* <!-- Import bootstrap --> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>

            {/* <!-- Import Material Design Icons --> */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />

            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            {/* <!--
                Notice the use of %PUBLIC_URL% in the tags above.
                It will be replaced with the URL of the `public` folder during the build.
                Only files inside the `public` folder can be referenced from the HTML.

                Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                work correctly both with client-side routing and a non-root public URL.
                Learn how to configure a non-root public URL by running `npm run build`.
            --> */}
            </Head>
            <Component {...pageProps} />
        </div>)
}