import milk from "../assets/images/Products/milk.png";
import ghee from "../assets/images/Products/ghee.png";
import paneer from "../assets/images/Products/paneer.png";
import curd from "../assets/images/Products/curd.png";
import butter from "../assets/images/Products/butter.png";
import buffaloMilk from "../assets/images/Products/buffalo-milk.png";

const products = [
  {
    id: 1,
    image: milk,
    name: "Fresh Cow Milk",
    category: "Milk",
    price: "₹60 / Litre",
    description: "Pure farm-fresh cow milk.",
    rating: "★★★★★",
  },
  {
    id: 2,
    image: ghee,
    name: "Desi Ghee",
    category: "Ghee",
    price: "₹750 / Kg",
    description: "Traditional handmade desi ghee.",
    rating: "★★★★★",
  },
  {
    id: 3,
    image: paneer,
    name: "Fresh Paneer",
    category: "Paneer",
    price: "₹350 / Kg",
    description: "Soft and fresh paneer.",
    rating: "★★★★☆",
  },
  {
    id: 4,
    image: curd,
    name: "Curd",
    category: "Curd",
    price: "₹90 / Kg",
    description: "Healthy homemade curd.",
    rating: "★★★★★",
  },
  {
    id: 5,
    image: butter,
    name: "Butter",
    category: "Butter",
    price: "₹450 / Kg",
    description: "Fresh white butter.",
    rating: "★★★★☆",
  },
  {
    id: 6,
    image: buffaloMilk,
    name: "Buffalo Milk",
    category: "Buffalo Milk",
    price: "₹75 / Litre",
    description: "Rich and creamy buffalo milk.",
    rating: "★★★★★",
  },
];

export default products;