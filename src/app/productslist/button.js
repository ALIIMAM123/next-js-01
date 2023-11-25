'use client'

const ProductButton = (props) => {
    const { title } = props
    return (
        <button onClick={() => alert(title)}> Click Here</button>
    )
}

export default ProductButton