import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import clothe from '../../Images/clothe.png'
import cat2 from '../../Images/cat2.png'
import prod1 from '../../Images/prod1.png'
import watch from '../../Images/watch.png'
import watch1 from '../../Images/watch1.jpg'

const HomeCategory = () => {
  return (
    <Container>
        <Row>
        <SubTitle title="التصنيفات" btntitle="المزيد"/>
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={prod1} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={watch1 } background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={watch} background="#F4DBA4" />
        </Row>
    </Container>
  )
}

export default HomeCategory