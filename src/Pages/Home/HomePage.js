import react from 'react'

import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';


const HomePage = () => {

    return (
        <div className='font' style={{minHeight:'670px'}}>
           
            <Slider/>
           <HomeCategory/>
           <CardProductContainer title="الاكثر مبيعا" btntitle="المزيد"/>
           <DiscountSection/>
           <CardProductContainer title="احدث المنتجات" btntitle="المزيد"/>
           <BrandFeatured title="اشهر الماركات" btntitle="المزيد"/>
        
        </div>
    )
}


export default HomePage;