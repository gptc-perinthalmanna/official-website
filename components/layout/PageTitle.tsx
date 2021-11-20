import React from 'react'

export function PageTitle({ children, ...props }: { children: React.ReactNode }) {
    return (
        <h1 className='text-2xl font-bold text-gray-700 my-3 '> {children} </h1>
    )
}