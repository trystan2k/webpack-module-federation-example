import React from "react";
import { Link } from "react-router-dom";

export default function SubRoute1() {
    return (
        <div>
            <h3>This is Sub Route 1</h3>
            <Link to="/">Back</Link>
        </div>
    )
}
