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

Content.Left = Left
Content.Right = Right