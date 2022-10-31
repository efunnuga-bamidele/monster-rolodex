// import { Component } from "react";

//styles
import './search-box.style.css'

const SearchBox = ({ className, placeholder, onChangeHandler}) => {
    return(
        <div>
            <input 
                type="search" 
                className={className} 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        </div>
    )
}
// class SearchBox extends Component{
//     render(){
//         const { onChangeHandler, className, placeholder } = this.props
//         return(
//             <div>
//             <input 
//                 type="search" 
//                 className={className} 
//                 placeholder={placeholder} 
//                 onChange={onChangeHandler}
//             />
//             </div>
//         )
//     }
// }

export default SearchBox