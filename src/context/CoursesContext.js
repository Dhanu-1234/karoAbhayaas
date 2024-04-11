import React from 'react'

const CoursesContext = React.createContext({
    cartItemsList: [],
    addItem: () => {},
    removeItem: () => {}
})

export default CoursesContext
