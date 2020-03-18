import React from 'react'
import { Link } from 'react-router-dom'
import SideBarCatagoryList from '../SideBarCatagoryList'

const PostSideBarContent = () => (
    <div>
        <h3>Catagories</h3>
        <SideBarCatagoryList />
        <hr />
        <Link to="/AddPage">Add Post</Link>
    </div>
);

export default PostSideBarContent
