"use client"
import React from "react"
import { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Tab from "react-bootstrap/Tab"
import ProductsSection from "./productsSection"

interface Product {
  id: number
  title: string
  shortDescription: string
  description: string
  price: number
  image: string
  image1: string
  category: string
}

const ProductsFilter = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products")
      const data = await res.json()
      setProducts(data)
    }
    loadProducts()
  }, [])

  console.log(products.map((p) => p.category))
  return (
    <div>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='first'>All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Pastry</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Cake</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fourth'>Specialty</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fifth'>Cookie</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='sixth'>Bread</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <ProductsSection
                  products={products.filter((p) => p.category)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <ProductsSection
                  products={products.filter((p) => p.category == "pastry")}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <ProductsSection
                  products={products.filter((p) => p.category == "cake")}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='fourth'>
                <ProductsSection
                  products={products.filter((p) => p.category == "specialty")}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='fifth'>
                <ProductsSection
                  products={products.filter((p) => p.category == "cookie")}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='sixth'>
                <ProductsSection
                  products={products.filter((p) => p.category == "bread")}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default ProductsFilter
