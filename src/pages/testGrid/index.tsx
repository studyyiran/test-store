import React from 'react'

export default function () {
    function renderLi() {
        return <p>
            <span>1</span>
            <a>2</a>
            <span>3</span>
        </p>
    }

    return <div className="form">
        {renderLi()}
        {renderLi()}
        <div>
            <section>1</section>
            <section>2</section>
        </div>
        {renderLi()}
        {renderLi()}
    </div>
}