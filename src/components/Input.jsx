import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='text-sm text-gray-400' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`w-full bg-gray-900 border border-gray-600 rounded py-2 px-4 text-gray-100 ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input