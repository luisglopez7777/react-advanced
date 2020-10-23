import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, onClick, disabled }) => {
    return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.prototypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}