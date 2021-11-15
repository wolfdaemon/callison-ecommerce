import React from "react";
import reactDom from "react-dom";


export class ItemsForSale extends React.Component {
    render() {
        return (
            
            <div>
               <img src="https://tse3.mm.bing.net/th?id=OIP.3xDplG5iHifUOlmRKiah2QHaHa&pid=Api&P=0&w=250&h=300" />
           <p>Cal- my thought process is this. Picture to the left and then a short description of it to the right. When user clicks on an image then it goes to another page where it gives us more information on said product. Thoughts? </p>
            </div>);
    };
}

ReactDOM.render(
    <ItemsForSale />,
    document.getElementById('root')
  );
