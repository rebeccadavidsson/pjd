import NavBar from '../components/navbar';
import React from 'react';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <main className={'font-sans'}>
                <NavBar/>
                {children}
            </main>
        </>
    )
}
