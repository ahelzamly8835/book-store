const description = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,
malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
`;

export const categories = [
  { id: 1, name: "Business", count: 140 },
  { id: 2, name: "Kids", count: 309 },
  { id: 3, name: "Art", count: 102 },
  { id: 4, name: "History", count: 204 },
  { id: 5, name: "Romance", count: 89 },
  { id: 6, name: "Fantasy", count: 47 },
  { id: 7, name: "Self Help", count: 163 },
  { id: 8, name: "Cooking", count: 211 },
  { id: 9, name: "Sports", count: 92, price:50 },
];
export const books = categories.flatMap(category => {

  // عدد عشوائي من 2 إلى 6 كتب لكل كاتيجوري
  const booksCount = Math.floor(Math.random() * 5) + 2; 
  // 2,3,4,5,6

  return Array.from({ length: booksCount }).map((_, index) => {

    const price = Math.floor(Math.random() * 80) + 20;
    const discount = Math.floor(Math.random() * 50);
    const finalPrice = (price - (price * discount) / 100).toFixed(2);
    const rating = (Math.random() * 2 + 3).toFixed(1);

    return {
      id: `${category.id}-${index}`,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997,
      description,
      categoryId: category.id,
      categoryName: category.name,
      price,
      discount,
      finalPrice,
      rating,
      image: "/public/no-book.png",
    };
  });
});