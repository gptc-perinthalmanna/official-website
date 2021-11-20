import React from 'react'

export function H1({ children, ...props }: { children: React.ReactNode }) {
    return (
        <h1 className='text-2xl font-bold text-gray-700 my-3 '> {children} </h1>
    )
}


export function H2({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={'text-xl font-bold text-gray-700 my-3 ' + className}> {children} </h2>
    )
}