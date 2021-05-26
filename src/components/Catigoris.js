import React, {useState, useEffect} from 'react'





export default function Catigoris({items, onClickItem}) {


    const [activeItem, setActiveItem]=useState(null);
    const onSelectItem=(index)=>{
        setActiveItem(index)
    }


  

    return (
        <div className="categories">
        <ul>
            <li onClick={()=> onSelectItem(null)}
            className={activeItem === null ?'active': ''}
            >
                Все
            </li>
           {
           items &&
           items.map((item, i) => (
           
           <li
           className={activeItem === i ?'active': ''}  
           onClick ={()=> onSelectItem(i)}
           key={`${item}_${i}`}>
               {item}
               </li>)
               )}
        
        </ul>
    </div>
    )
}


// class Catigoris extends React.Component{

// state={
// activeItem:3,

// };

// onSelectItem= index =>{
//     this.setState({activeItem:index})
// }

//     render(){


//         const {items, onClickItem}=this.props;
//         return(
// <div className="categories">
//        <ul>
//             <li>Все</li>
//           {items.map((item, i) => (
//           <li
//           onChange={()=> this.onSelectItem(i)} 
//           className={this.state.activeItem === i ? 'active': '' }
//           onClick ={()=> this.onSelectItem(i)}
//            key={`${item}_${i}`}>
//               {item}
//               </li>)
//               )}
        
//        </ul>
//    </div>
//         )


//     }
// }
// export default Catigoris;