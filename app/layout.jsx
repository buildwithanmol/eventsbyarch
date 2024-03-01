import '../styles/globals.css'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Arch Events Management LLC',
  description: 'Arch Events has a flair for providing customizable design, planning & production services that are Uniquely You, Uniquely Dubai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/709edcea1f8e218d264c1a4dc0d36d0e?family=FreightBig+W03+Semibold" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
