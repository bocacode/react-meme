import React, { useEffect } from 'react'
import { getMemes } from '../helpers'
import { Card, Col, Row } from 'antd'

function MemeList({ memes, setMemes }) {
  useEffect(() => {
    getMemes(setMemes)
  }, [setMemes])
  if(!memes) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {memes.map(item => {
          return (
            <Col xs={24} sm={12} md={8} lg={8} xl={4} key={item.id}>
              <Card
                hoverable
                cover={<img src={item.imageUrl} alt={item.title} />}
              >
                <Card.Meta title={item.title} description={item.creator} />
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MemeList