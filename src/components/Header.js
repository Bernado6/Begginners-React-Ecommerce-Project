import React from "react";

// function Header() {
//     return (
//         <div>
//             First React Component!
//         </div>
//     )
// };

const Header = () => {
    return (
        <div className="ui fixed menu" style = {{ height: '55px' }}>
            <div className="ui container center">
                <h1>KETFASHON</h1>
            </div>
        </div>
    )
};

export default Header;