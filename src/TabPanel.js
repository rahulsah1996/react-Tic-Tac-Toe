import React from 'react'
import { Button, Row, Col, Container, Carousel, ListGroupItem, Card, ListGroup, Tab, Table, Tabs, TabContent, Accordion, Alert} from 'react-bootstrap';

export default function TabPanel(props) {
  return (
    <div>
        <Tabs style={{ background: "none", marginTop: "16px" }} defaultActiveKey="assets" id="uncontrolled-tab-example" className="mb-3">
  <Tab style={{ background:"#756161 " }} eventKey="assets" title={props.title}>
  How careful was I when I took my way, Each trifle under truest bars to thrust, That to my use it might unused stay From hands of falsehood, in sure wards of trust! But thou, to whom my jewels trifles are, Most worthy comfort, now my greatest grief, Thou best of dearest, and mine only care, Art left the prey of every vulgar thief.
  Thee have I not lock'd up in any chest, Save where thou art not, though I feel thou art, {props.title}
  <TabContent />
  </Tab>
  <Tab style={{ background:"rgb(47, 113, 38) " }} eventKey="management" title="Management">
  How careful was I when I took my way, Each trifle under truest bars to thrust, That to my use it might unused stay From hands of falsehood, in sure wards of trust! But thou, to whom my jewels trifles are, Most worthy comfort, now my greatest grief, Thou best of dearest, and mine only care, Art left the prey of every vulgar thief.
  Thee have I not lock'd up in any chest, Save where thou art not, though I feel thou art,
    <TabContent />
  </Tab> 
</Tabs>
    </div>
  )
}
