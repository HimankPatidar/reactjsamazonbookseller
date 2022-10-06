import React from 'react'
import ReactDOM from 'react-dom/client'
import './index1.css';

const books = [
  {
    id:1,
    img:"https://m.media-amazon.com/images/I/81JByBEqw+S._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Power of A Positive Attitude",
    author:"Roger Fritz",
    price:"83",
    sell:"3%",
  },
  {
    id:2,
    img:"https://m.media-amazon.com/images/I/81NYuWzsJcS._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Richest Man in Babylon",
    author:"George S.Clason",
    price:"150",
    
  },
  {
    id:3,
    img:"https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Ikigai",
    author:"Hector Garcia",
    price:"257",
    sell:"53%",
  },
  {
    id:4,
    img:"https://m.media-amazon.com/images/I/71H9cA7MvxS._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Art of War",
    author:"Sun Tzu",
    price:"79",
    sell:"3%",
  },
  {
    id:5,
    img:"https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY327_FMwebp_QL65_.jpg",
    title:"Think and Grow Rich",
    author:"Napoleon Hill",
    price:"224",
    sell:"3%",
  },
  {
    id:6,
    img:"https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Alchemist",
    author:"Paulo Coelho",
    price:"167",
    sell:"52%",
  },
  {
    id:7,
    img:"https://m.media-amazon.com/images/I/81-XmZm67vS._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Everyday Hero Manifesto",
    author:"Robin Sharma",
    price:"224",
    sell:"44%",
  },
  {
    id:8,
    img:"https://m.media-amazon.com/images/I/91yjbqL1V2S._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Prophet",
    author:"Kahil Gibram",
    price:"79",
    sell:"3%",
  },
  {
    id:9,
    img:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Attitude is Everything",
    author:"Jeff Keller",
    price:"135",
    sell:"40%",
  },
  {
    id:10,
    img:"https://m.media-amazon.com/images/I/71wi8N15G5L._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Moral Compass",
    author:"Hardayal Singh",
    price:"255",
    sell:"36%",
  },
  {
    id:11,
    img:"https://m.media-amazon.com/images/I/81q1AIIjedL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Ananda:Happiness Without Reason",
    author:"Acharya Prashant",
    price:"259",
    sell:"35%",
  },
  {
    id:12,
    img:"https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Wings Of Fire",
    author:"A.P.J. Abdul Kalam",
    price:"271",
    sell:"40%",
  },
  {
    id:13,
    img:"https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Monk Who Sold His Ferrari",
    author:"Robin Sharma",
    price:"144",
    sell:"42%",
  },
 
]
// function Heading(){
//   return(
//     <header>
//       <h1 className="header">Amazon Best Selling Book</h1>
//     </header>
//   )



function BestSeller(){
  <>
   <h1 className='header'>Amazon Best Selling Book</h1>
   </>
  return(
    <section className="booklist">
      {books.map((book)=>{
        return <Book  book={book} key={book.id}/>
      })}
    </section>
  )
}

const Book = (props) => {
  // console.log(props)
//   <>
// <h1 className='header'>Amazon Best Selling Book</h1>
// </>

 const {img,title,author,price,sell} = props.book
  
return(
    
    <article className='book'>
   
      <img src={img} alt="" />
      <main className="text">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>&#8377;{price}</h3>
      <h4>Sell:{sell}</h4>
      <button>Buy Now</button>
      </main>
      
    </article>

  )
 }


ReactDOM.createRoot(document.getElementById("root")).render(<BestSeller />)
// export default App;
