import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import clothe from '../../Images/clothe.png'
import brand2 from '../../Images/brand2.png'
import brand3 from '../../Images/brand3.png'
import cat2 from '../../Images/cat2.png'

const CategoryContainer = () => {
  return (
    <Container>
        <div  className="admin-content-text mt-2 ">
            كل التصنيفات
        </div>
        <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={brand2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={brand2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={brand2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={brand2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={brand2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
            <CategoryCard title="اجهزة منزلية" img={brand3} background="#F4DBA4"/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF"/>
        </Row>
    </Container>
  )
}

export default CategoryContainer