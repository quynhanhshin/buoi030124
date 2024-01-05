import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        {/* <ul>
            <li>
                <a href='Home'>Home</a>
            </li>
            <li>
                <a href='ReactStrap'>ReactStrap</a>
            </li>
            <li>
                <a href='Header'>Header</a>
            </li>
            <li>
                <a href='Footer'>Footer</a>
            </li>
        </ul> */}
         <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/header">Header</Link>
            </li>
            <li>
                <Link to="/footer">Footer</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/product/1">Product 1</Link>
            </li>
            <li>
                <Link to="/product/2">Product 2</Link>
            </li>
        </ul>
    </div>
  )
}
