import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import Title from "../Title/Title";
import Card from "../Card/Card";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";




const ProductsFilter = ({title}) => {

    const {products} = useContext(CustomContext)
  
    return (
        <div className='products__filter'>
            <Title title={title}/>
            <div className="products__filter-sliders">
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={20}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        products.map((item)=>(
                            <SwiperSlide key={item.id}>
                                    <Card item={item}/>
                            </SwiperSlide>
                        ))
                    }
                    

                    
                    
                </Swiper>
            </div>
        </div>
    );
};

export default ProductsFilter;