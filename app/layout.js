import Navbar from '@/components/templates/Navbar';
import { connect } from 'mongoose';
import localFont from 'next/font/local'

const Neo = localFont({
  src: [
    {
      path: '../public/fonts/Neometric-Bold.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/Neometric-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Neometric-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
})

const Riv = localFont({
  src: '../public/fonts/Riviera.otf',
})

export const metadata = {
  title: 'Shayan Jafarnejad | Developer',
  icons: {
    icon: '/images/mainFont.png',
  },
  description: 'Design and develop fast, SEO-friendly, and responsive websites with a focus on user experience. Expertise in JavaScript, React, and Next.js. View portfolios and contact for collaboration.',
  url: "http://localhost:3000/",
  metadataBase: new URL("http://localhost:3000/"),
  
  openGraph: {
    title: "Developer`s Portfolio",
    description: "Design and develop fast, SEO-friendly, and responsive websites with a focus on user experience. Expertise in React, and Next.js.",
    images: [
      { url: '/images/web.jpg', width: 800, height: 600 }
    ],
    local: 'en_US',
    type: 'website'
  }

}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${Riv.className} ${Neo.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}