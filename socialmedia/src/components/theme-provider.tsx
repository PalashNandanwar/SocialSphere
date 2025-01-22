"use client"

import { useEffect } from "react"
import { themeChange } from 'theme-change'

// import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
