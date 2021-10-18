// МАГАЗИН ПРОДУКТОВ
const shopProduct = [
  { name: "apples", quantity: 200, isFresh: true, price: 23 },
  { name: "grapes", quantity: 150, isFresh: false, price: 52 },
  { name: "bananas", quantity: 100, isFresh: true, price: 45 },
];

const obg = {
  apples: { name: "apples", quantity: 20, isFresh: true, price: 23, left: 0 },
  grapes: { name: "grapes", quantity: 15, isFresh: false, price: 52, left: 0 },
  bananas: {
    name: "bananas",
    quantity: 10,
    isFresh: true,
    price: 45,
    left: 0,
  },
};

const shopCard = (param) => {
  let purchasesCount = 0;
  const purchases = (name, count) => {
    // console.log("i am buyer");
    param[name].left = param[name].quantity -= count; // остаток продуктов
    purchasesCount += 1;
    return param[name].price * count; // счёт за продукты
  };
  return purchases;
};

const buyer = shopCard(obg);
console.log(buyer("apples", 3));
console.log(buyer("bananas", 1));
console.log(buyer("grapes", 5));
console.log(buyer("grapes", 5));
console.log(obg);
