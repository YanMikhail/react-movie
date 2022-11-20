import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";

const Search = ({search, setSearch, handleAddToHistory}) => {
    return (
        <div style={{marginTop: 30}}>
            <TextField
                sx={{width: "80%", height: "40px", mr: "40px"}}
                label="Search"
                value={search}
                onChange={(event)=> setSearch(event.target.value)}
            />
            <Button variant="outlined" color="secondary"  sx={{width: "15%", height: "56px"}} onClick={handleAddToHistory}>
                <Link to={`/search/${search}`}>
                    Search
                </Link>
            </Button>
        </div>
    );
};

export default Search;