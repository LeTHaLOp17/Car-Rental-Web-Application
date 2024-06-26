// import all images from assets/images directory
import img01 from "../all-images/cars-img/urus.png";
import img02 from "../all-images/cars-img/g-wagon.png";
import img03 from "../all-images/cars-img/G-Wagon-W.png";
import img04 from "../all-images/cars-img/White-Range-Rover.png";
import img05 from "../all-images/cars-img/Coupe.png";
import img06 from "../all-images/cars-img/Mustang-gt.png";
import img07 from "../all-images/cars-img/Mini-Cooper.png";
import img08 from "../all-images/cars-img/Defender.png";

const carData = [
  {
    id: 1,
    brand: "Lamborghini",
    rating: 112,
    carName: "Urus",
    imgUrl: img01,
    model: "Top Model",
    price: 32000,
    speed: "7.8km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Lamborghini Urus is a high-performance luxury SUV that combines breathtaking speed and agility with exquisite Italian craftsmanship. With its striking design, powerful engine, and advanced technology, the Urus redefines the boundaries of what an SUV can be, offering unparalleled performance on both road and track.",
  },

  {
    id: 2,
    brand: "Mercedes",
    rating: 102,
    carName: "G-Wagon Black",
    imgUrl: img02,
    model: "Model-2022",
    price: 25000,
    speed: "9km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz G-Wagon, short for Gelandewagen, is an iconic luxury SUV renowned for its rugged off-road capabilities and opulent interior. With its boxy design and robust construction, the G-Wagon exudes a timeless appeal while boasting cutting-edge technology and exceptional comfort features. Whether navigating city streets or conquering rough terrain, the G-Wagon offers unmatched versatility and prestige."
    },

  {
    id: 3,
    brand: "Mercedes",
    rating: 132,
    carName: "G-Wagon White",
    imgUrl: img03,
    model: "Model-2022",
    price: 30000,
    speed: "9km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz G-Wagon, short for Gelandewagen, is an iconic luxury SUV renowned for its rugged off-road capabilities and opulent interior. With its boxy design and robust construction, the G-Wagon exudes a timeless appeal while boasting cutting-edge technology and exceptional comfort features. Whether navigating city streets or conquering rough terrain, the G-Wagon offers unmatched versatility and prestige."
    },

  {
    id: 4,
    brand: "Land Rover",
    rating: 102,
    carName: "Range Rover",
    imgUrl: img04,
    model: "Model-2022",
    price: 35000,
    speed: "12km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Range Rover is a symbol of luxury and capability, offering a blend of refined elegance and off-road prowess. Renowned for its iconic design, plush interior, and advanced technology, the Range Rover delivers a first-class driving experience both on and off the road. From its powerful engines to its sophisticated terrain response systems, the Range Rover embodies the perfect balance of luxury and adventure, making it a top choice for discerning drivers seeking ultimate comfort and performance.",
  },

  {
    id: 5,
    brand: "Mercedes",
    rating: 95,
    carName: "Cooper",
    imgUrl: img05,
    model: "Model-2022",
    price: 45000,
    speed: "15km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz Coupe represents the epitome of automotive luxury and performance, combining sleek design with exhilarating driving dynamics. With its distinctive coupe silhouette, precision engineering, and advanced technology, the Mercedes-Benz Coupe delivers a thrilling driving experience while exuding timeless elegance. From its powerful engines to its refined interior, every aspect of the Mercedes-Benz Coupe is crafted to elevate the driving experience, offering unparalleled comfort, style, and performance for those who demand nothing but the best.",
  },

  {
    id: 6,
    brand: "Ford",
    rating: 319,
    carName: "Mustang GT",
    imgUrl: img06,
    model: "Model-2022",
    price: 45000,
    speed: "11.80km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mustang GT is an American icon, embodying the spirit of raw power and exhilarating performance. With its muscular design, thunderous engine, and legendary heritage, the Mustang GT commands attention on the road and the track. From its aggressive stance to its roaring V8 engine, every aspect of the Mustang GT is engineered for adrenaline-pumping thrills. Whether cruising the open highway or tearing up the racetrack, the Mustang GT delivers a driving experience that's as exhilarating as it is unforgettable, making it a true symbol of American muscle car excellence.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 182,
    carName: "Mini Cooper",
    imgUrl: img07,
    model: "Model 3",
    price: 34000,
    speed: "13km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The MINI Cooper is a charismatic and iconic small car renowned for its distinctive design, agile handling, and playful personality. With its compact size and retro-inspired styling, the MINI Cooper exudes charm while offering a fun and nimble driving experience. From its customizable exterior colors to its cozy yet surprisingly spacious interior, the MINI Cooper captures hearts with its unique blend of style and practicality. Whether zipping through city streets or cruising along country roads, the MINI Cooper brings a smile to the face of drivers who appreciate its blend of character, efficiency, and driving enjoyment.",
  },

  {
    id: 8,
    brand: "Land Rover",
    rating: 252,
    carName: "Defender",
    imgUrl: img08,
    model: "Model 3",
    price: 50000,
    speed: "8.5km/l",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Defender is a rugged and versatile off-road vehicle that's synonymous with adventure and capability. Originally designed for rugged terrain and harsh conditions, the Defender has evolved over the years while retaining its legendary toughness and go-anywhere capability. With its boxy shape, durable construction, and advanced off-road systems, the Defender is ready to conquer the toughest trails and terrain with ease. From its powerful engine options to its spacious and utilitarian interior, the Defender offers a blend of practicality and adventure that's unmatched in its class. Whether exploring remote wilderness or navigating urban jungles, the Defender is the ultimate companion for those who seek adventure without compromise.",
  },
];

export default carData;
