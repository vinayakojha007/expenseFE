import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"


interface MainLayout {
  children?: React.ReactNode; 
  // or React.FC<MyComponentProps>
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto min-h-[calc(100vh-128px)] px-4 py-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}