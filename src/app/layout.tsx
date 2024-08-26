import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'DIY Crafts: Sparkle with Diamond Painting Supplies in Lebanon',
    description: `Explore the world of creative expression with diamond painting! Discover our exclusive collection of DIY crafts that combine relaxation and self-expression. Unleash your creativity and create breathtaking masterpieces with our high-quality diamond painting kits`,
    icons: {
        icon: `https://ucarecdn.com/8dfcc837-04af-471f-b263-efd704c1be94/WhatsAppImage20240203at0814371.jpeg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar />
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
