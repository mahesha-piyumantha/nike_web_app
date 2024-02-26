import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

/* 
This method can only be used instead of using
export default function, if there are no any console.logs or function callings

 :- there is no return method and using () except {} brackets

*/

const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">hero</section>
    <section className="padding">Popular Products</section>
    <section className="padding">Super Quality</section>
    <section className="padding-x py-10">Services</section>
    <section className="padding">Special Offer</section>
    <section className="padding bg-pale-blue">Customer Reviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
    <section className="padding-x padding-t pb-8 bg-black">Footer</section>
  </main>
);

export default App;
