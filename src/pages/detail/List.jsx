import React from 'react'

const List = ({ title, arr }) => {
    return (
        <div className=' mb-5'>
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>

            <div>
                {
                    arr?.((item, key) => (
                        <span className='border py-1 px-2 rounded-md'>
                            {item.name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default List