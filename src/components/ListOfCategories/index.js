import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { Spinn } from './spinner'

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        window.fetch('https://petgram-server-luisglopez7777.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)


    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading
                    ?
                    <Item key='loading'><Category /> </Item>
                    // <Spinn>
                    //     <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    // </Spinn>

                    :
                    categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>
    )

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>

    )
}