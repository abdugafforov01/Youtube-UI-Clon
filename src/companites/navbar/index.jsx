import React from 'react'
import { Col, Content, Flow, Form, Group, Icon, Info, Logo, Micro, Nav, Search, Vide } from './style' ;
import ham from '../../assets/img/hamburger.png'
import group from '../../assets/img/Group 1.png'
import video from '../../assets/img/Vector 2.png'
import apps from '../../assets/img/Vector 1.png'
import navigation from '../../assets/img/Vector 3.png'
import frame from '../../assets/img/email.jpg'
import icon from '../../assets/img/Vector 4.png'
import mic from '../../assets/img/Icon.png'
export default function Navbar() {
  return (
   <Nav>
      <Content>
        <Group src={ham}></Group>
        <Logo src={group}></Logo>
      </Content>
      <Form>
        <Search placeholder='Search'></Search>
        <Icon>
          <Flow src={icon}></Flow>
        </Icon>
        <Micro src={mic}></Micro>
      </Form>
      <Col>
      <Vide src={video}></Vide>
      <Vide src={apps}></Vide>
      <Vide src={navigation}></Vide>
      <Info src={frame}></Info>
      </Col>
   </Nav>
  )
}
