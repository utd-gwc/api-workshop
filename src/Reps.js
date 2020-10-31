import React from 'react';
import { Typography, Row, Col, Card, Image } from 'antd'
import fallbackImage from './static/profile-photo-fallback.jpg'


function getPartyColor(party) {
    switch (party) {
        case "Republican Party": return '#DE0100'
        case "Democratic Party": return '#0015BC'
        default: return 'white'
    }
}

function getPartyTextColor(party) {
    switch (party) {
        case "Republican Party":
        case "Democratic Party": return 'white'
        default: return "black"
    }
}

function getPartyMetaTextColor(party) {
    switch (party) {
        case "Republican Party":
        case "Democratic Party": return 'LightGray'
        default: return "Grey"
    }
}

export default function Reps({ rowsOfReps }) {
    if (rowsOfReps == null) {
        return null;
    } else {
        return (
            rowsOfReps.map((row, index) => {
                return (
                    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} key={index}>
                        {row.map((rep) => {
                            return (
                                <Col span={24 / row.length} key={rep.info.name}>
                                    <a href={rep.info.urls != null ? rep.info.urls[0] : null} target="_blank" rel="noreferrer">
                                        <Card
                                            hoverable
                                            bordered={false}
                                            style={{ width: '20vw', backgroundColor: getPartyColor(rep.info.party) }}
                                            cover={
                                                rep.info.photoUrl != null ?
                                                    <Image
                                                        width={'20vw'}
                                                        height={'27vw'}
                                                        src={rep.info.photoUrl}
                                                    /> :
                                                    <Image
                                                        preview={false}
                                                        width={'20vw'}
                                                        height={'27vw'}
                                                        src={fallbackImage}
                                                    />
                                            }
                                        >
                                            <Card.Meta
                                                title={
                                                    <Typography.Title level={4} style={{ color: getPartyTextColor(rep.info.party) }}>
                                                        {rep.info.name}
                                                    </Typography.Title>
                                                }
                                                description={
                                                    <Typography.Title level={5} style={{ color: getPartyMetaTextColor(rep.info.party) }}>
                                                        {rep.office.name}
                                                    </Typography.Title>
                                                } />
                                        </Card>
                                    </a>
                                </Col>
                            )
                        })}
                    </Row>
                )
            })
        )
    }
}