import React from 'react'
import prd1 from "../../assets/imgs/product1.jpg"
import prd2 from "../../assets/imgs/product2.jpg"
import { Link } from 'react-router-dom'
export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1, prdName: "Đồng hồ Orient Small", price: 5490000, prdImage: prd1, description: "Đồng hồ Orient Small Bambino 38.4 mm Nam RA-AP0104S30B thuộc thương hiệu Orient của Nhật Bản."
    },
    {
      id: 2, prdName: "Đồng hồ Orient Mako Solar", price: 2310000, prdImage: prd2, description: "Đồng hồ Orient Mako Solar 38.4 mm Nam RA-AP0104S30B thuộc thương hiệu Orient của Nhật Bản."
    },
    {
      id: 3, prdName: "Citizen 38 mm Nam BM7334-58B", price: 11110000, prdImage: prd1, description: "Citizen 38 mm Nam BM7334-58B 38.4 mm Nam RA-AP0104S30B thuộc thương hiệu Orient của Nhật Bản."
    },
    {
      id: 4, prdName: "Orient Mako Solar 42.8", price: 9990000, prdImage: prd2, description: "Orient Mako Solar 42.8 mm Nam RA-AP0104S30B thuộc thương hiệu Orient của Nhật Bản."
    }
  ]
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-5">Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 gap-5">
        { 
          products.map((product) => {
            return (
              <div key={product.id} className='bg-white shadow-md rounded-lg'>
                <img src={product.prdImage} alt={product.prdName} className='w-full h-80 object-cover'/>
                <h3 className="text-lg font-semibold">{product.prdName}</h3>
                <p className="text-red-400 font-medium text-lg">{product.price} VND</p>
                <div className='flex flex-col'>
                <Link to={`/detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-4'>Chi tiết sản phẩm</Link>
                <button onClick={() => { handleAddToCart(product) }} className="w-full block bg-green-500 text-white py-2 rounded-lg">Thêm vào giỏ hàng</button>
                </div>
              </div>  
          )
        })}
      </div>
    </section>
  )
}
