/**
 * Created by fbojor on 30.11.2016.
 */
export default {
  user: null,
  categories: [
    "Shopping",
    "Transportation",
  ],
  transactions: [
    {
      id: 1,
      date: new Date(Date.UTC(2016, 11, 12)),
      category: "Shopping",
      price: 25.2,
      details: "food"
    },
    {
      id: 2,
      date: new Date(Date.UTC(2016, 11, 13)),
      category: "Shopping",
      price: 2142,
      details: "phone"
    },
    {
      id: 3,
      date: new Date(Date.UTC(2016, 11, 14)),
      category: "Shopping",
      price: 30,
      details: "book"
    },
    {
      id: 4,
      date: new Date(Date.UTC(2016, 11, 15)),
      category: "Shopping",
      price: 353,
      details: "gift"
    },
    {
      id: 5,
      date: new Date(Date.UTC(2016, 11, 20)),
      category: "Transportation",
      price: 44,
      details: "fuel"
    },
    {
      id: 6,
      date: new Date(Date.UTC(2016, 11, 20)),
      category: "Transportation",
      price: 212,
      details: "ratuc"
    },
    {
      id: 7,
      date: new Date(Date.UTC(2016, 11, 20)),
      category: "Transportation",
      price: 55,
      details: "Ticket"
    },
    {
      id: 8,
      date: new Date(Date.UTC(2016, 11, 13)),
      category: "Shopping",
      price: 25,
      details: "tshirt"
    },
  ],
  routes: {
    scene: {}
  }
}
