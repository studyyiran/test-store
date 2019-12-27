import React from "react";
import { Link } from "react-router-dom";
export default function RouterLink(props: {
    to: string;
    isBuy?: boolean;
    onClick?: any;
    children?: any;
    target?: any;
    className?: any;
}) {
    const { isBuy, onClick, to, ...other } = props;

    function RenderLink() {
        return <Link onClick={onClick} {...other} to={to} />;
    }
    return <RenderLink />

}

