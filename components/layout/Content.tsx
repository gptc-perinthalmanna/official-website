import React from 'react'

function Content({children}: {children: React.ReactNode}) {
    return (
        <div className='flex flex-wrap'>
            {children}
        </div>
    )
}

export default Content


function Left({children}: {children: React.ReactNode}) {
    return (
        <div className='w-full lg:w-2/3'>
            {children}
        </div>
    )
}

function Right({children}: {children: React.ReactNode}) {
    return (
        <div className='w-full lg:w-1/3'>
            {children}
        </div>
    )
}

function Half({children}: {children: React.ReactNode}) {
    return (
        <div className='w-full lg:w-1/2'>
            {children}
        </div>
    )
}

function FullWidth({children}: {children: React.ReactNode}) {
    return (
        <div className='w-full'>
            {children}
        </div>
    )
}

Content.FullWidth = FullWidth
Content.Left = Left
Content.Right = Right
Content.Half = Half