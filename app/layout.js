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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${Riv.className} ${Neo.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
