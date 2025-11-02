"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { useAuthStore } from "@/lib/store/auth-store"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Technical Support", href: "/technical-support" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated, user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setMobileMenuOpen(false)
  }

  const handleLogin = () => {
    router.push("/login")
    setMobileMenuOpen(false)
  }

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? 'bg-gray-900/90 border-[#7a4d15]' : 'bg-white/80 border-border'} backdrop-blur-md border-b sticky top-0 z-50 shadow-sm transition-colors duration-300`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary'} transition-all`}>
              Thulir
            </span>
            <span className={`text-sm ml-1 ${isScrolled ? 'text-gray-300' : 'text-muted-foreground'}`}>Agency</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-muted transition-colors ${isScrolled ? 'text-white hover:bg-gray-600' : 'text-foreground'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors relative group ${isScrolled ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-secondary'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-gray-300' : 'bg-secondary'}`} />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button asChild variant={isScrolled ? 'secondary' : 'secondary'} className= {`${isScrolled ? 'bg-[#fd9414]':''} shadow-lg shadow-secondary/50`} size="sm">
            <Link href="/request-quote">Request Quote</Link>
          </Button>
          {isAuthenticated ? (
            <TooltipProvider>
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="ghost" size="sm" className={isScrolled ? 'text-white hover:bg-gray-600 hover:text-white' : ''}>
                      <Link href="/admin/dashboard">
                        <User className={`h-4 w-4 ${isScrolled ? 'text-white' : ''}`} />
                        <span className="sr-only">Admin Dashboard</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Admin</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className={isScrolled ? 'text-white hover:bg-gray-600 hover:text-white' : ''}>
                      <LogOut className={`h-4 w-4 ${isScrolled ? 'text-white' : ''}`} />
                      <span className="sr-only">Logout</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </>
            </TooltipProvider>
          ) : (
            <Button asChild variant="brand" size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t border-border backdrop-blur-md ${isScrolled ? 'bg-gray-700' : 'bg-white/95'}`}>
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${isScrolled ? 'text-white hover:bg-gray-600' : 'text-foreground hover:bg-muted'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                asChild
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/request-quote">Request Quote</Link>
              </Button>
              {isAuthenticated ? (
                <TooltipProvider>
                  <>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild variant="ghost" className={`w-full ${isScrolled ? 'text-white hover:bg-gray-600 hover:text-white' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                          <Link href="/admin/dashboard">
                            <User className={`h-4 w-4 ${isScrolled ? 'text-white' : ''}`} />
                            <span className="sr-only">Admin Dashboard</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Admin</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className={`w-full ${isScrolled ? 'text-white hover:bg-gray-600 hover:text-white' : ''}`} onClick={handleLogout}>
                          <LogOut className={`h-4 w-4 ${isScrolled ? 'text-white' : ''}`} />
                          <span className="sr-only">Logout</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Logout</p>
                      </TooltipContent>
                    </Tooltip>
                  </>
                </TooltipProvider>
              ) : (
                <Button asChild variant="brand" className="w-full" onClick={handleLogin}>
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
