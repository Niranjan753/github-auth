"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { handleGitHubSignIn } from '../actions/auth'

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
            
                <div className='flex items-center gap-5 text-black'>
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>create</span>
                            </Link>

                            <button onClick={() => signOut()}>
                                <span>logout</span>
                            </button>

                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={handleGitHubSignIn}>
                            <button type="submit">
                                <span>Login</span>
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;