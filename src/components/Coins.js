import React, { useState } from "react"
import { connect } from 'react-redux'
import { getAllCoins } from '../redux/actions'
import { Button } from 'react-bootstrap'

const Coins = (props)  => {

  useState(() => {
    console.log('Coins component', props)
    const getData = () => {
        console.log('useState')
        props.getAllCoins()
    }
    getData()
  },[])

  return (
    <div>
        Hello coins component!
    </div>
  )
}

const mapStateToProps = ({coins}, ownProps) => ({
  coins
})

const mapDispatchToProps = dispatch => ({
    getAllCoins: () => dispatch(getAllCoins())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Coins)