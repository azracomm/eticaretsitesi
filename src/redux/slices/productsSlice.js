

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      name: "Ahşap Kitaplık",
      price: 35000,
      image: "/src/images/ahsapkitaplık.jpg",
      description: "El yapımı ahşap kitaplık (Fiyatlar ölçüye ve kullanılacak isteğe bağlı boyaya göre değişim gösterebilir).",
      category: "Mobilya",
      stock: 10
    },
    {
      id: 2,
      name: "Çok Amaçlı Ahşap Dolap",
      price: 70000,
      image: "/src/images/cokamaclıahsapdolap.jpg",
      description: "İstediğiniz her yerde kullanabileceğiniz ahşap aynalı dolap (Ayna boyutu ve genel ölçülere göre fiyatta değişiklik gösterilebilir).",
      category: "Mobilya",
      stock: 15
    },
    {
      id: 3,
      name: "Ahşap Şifonyer",
      price: 8000,
      image: "/src/images/cokamaclıdolap.jpg",
      description: "Ahşap şifonyer (İsteğe bağlı olarak raf eklenip çıkartılabilir ölçüye göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 8
    },
    {
      id: 4,
      name: "Gömmeli Yatak Odası Dolabı",
      price: 35000,
      image: "/src/images/gömmeliyatakodasıdolabı.jpg",
      description: "Gömmeli yatak odası dolabı(Ölçüye, kullanılacak malzemeye ve boyaya göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 25
    },
    {
      id: 5,
      name: "Kitaplık",
      price: 20000,
      image: "/src/images/kitaplık.jpg",
      description: "Ahşap kitaplık (İsteğe göre raf eklenip çıkartılabilir ölçüye göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 30
    },
    {
      id: 6,
      name: "Mini Bar",
      price: 30000,
      image: "/src/images/minibar.jpg",
      description: "El yapımı ahşap mini bar( Boyaya ve ölçüye göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 20
    },
     {
      id: 7,
      name: "Mini Kitaplık",
      price:12000,
      image: "/src/images/minikitaplık.jpg",
      description: "El yapımı mini kitaplık (İsteğe göre raf eklenip çıkartılabilir ölçüye göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 10
    },
    {
      id: 8,
      name: "Mutfak Dolabı Ve Masası",
      price: 85000,
      image: "/src/images/mutfakdolabivemasasi.jpg",
      description: "Mutfak dolabı ve mutfak masası seti (İsteğe göre ürünleri ayrı ayrı sipariş edebilirsiniz fiyatlar ölçülere göre değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 15
    },
    {
      id: 9,
      name: "Mutfak Dolabı",
      price: 65000,
      image: "/src/images/mutfakdolabı.jpg",
      description: "Tamamen el emeği mutfak dolabı( Ölçülere göre fiyatlar değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 8
    },
    {
      id: 10,
      name: "Tamamı Ahşap Bungalow",
      price: 1500000,
      image: "/src/images/tamamıahsapbungalow.jpg",
      description: "El yapımı tamamı ahşap bungalow ( Oda sayısına ve metrekareye göre fiyat değişiklik gösterebilir).",
      category: "Yaşam",
      stock: 25
    },
    {
      id: 11,
      name: "Tv Ünitesi",
      price: 65000,
      image: "/src/images/tvünitesi.jpg",
      description: "El yapımı tv ünitesi ( Ölçüye ve istenilen boyaya göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 30
    },
    {
      id: 12,
      name: "Yatak Odası Takımı",
      price: 100000,
      image: "/src/images/yatakodasıtakımı.jpg",
      description: "El yapımı işçilik yatak odası takımı (İsteğe göre ürünleri ayrı ayrı sipariş edebilirsiniz ölçülere göre fiyat değişiklik gösterebilir).",
      category: "Mobilya",
      stock: 20
    }
  ],
  searchTerm: ''
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  }
})

export const { setSearchTerm } = productsSlice.actions

// Selectors
export const selectProducts = (state) => state.products.products
export const selectSearchTerm = (state) => state.products.searchTerm
export const selectFilteredProducts = (state) => {
  const { products, searchTerm } = state.products
  if (!searchTerm.trim()) return products
  
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export default productsSlice.reducer
