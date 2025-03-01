import Container from 'react-bootstrap/Container'
import React from 'react';
import Button from 'react-bootstrap/Button'

import SiteNav from '../../components/sitenav'
import Header from '../../components/header'
import EmailListCard from '../../components/emailListCard'
import Details from '../../components/details'
import { list_events } from '../../db/access'

import withSession from '../../lib/session'

import Router from 'next/router'

import {
    create_event
} from '../../lib/api'


export default class AllEvents extends React.Component {

    constructor(props) {
        super(props)
        this.newEvent = this.newEvent.bind(this);
    }

    newEvent(ev) {
        create_event()
            .then(result => {
                console.log(result)
                Router.push('/event/' + result.ok.id)
            })
            .catch(error => {
                // TODO: Reload this page on error.
                console.log('ERROR: ', error)
            })
        console.log("Eat me")
    }

    render() {
        return (
            <>
            <SiteNav user={this.props.user}/>
            <Header/>
            <Container fluid style={{textAlign:'center', padding: 40}}>
            <h1>List of Events:</h1>
            <ul style={{ justifyContent: 'center', display: 'block'}}>
            {
                this.props.events.map((event) => {
                    return (
                        <li key={event.id}>
                            <a href={"event/" + event.id}>{event.title}</a>
                            <br></br>
                        </li>
                    )
                })
            }
            </ul>
            <Button variant="primary" onClick={this.newEvent}>New Event</Button>
            </Container>
            <Details/>
            <EmailListCard />
            </>
        )    
    }
}




export const getServerSideProps = withSession(async function ({ req, res }) {  

    // Check if the user is logged in. If not redirect to login page.
    const user = req.session.get('user')
    if (user == null) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    // Get the list of events and render them.
    const data = await list_events(user)
    return { 
        props: {
            events: data,
            user: req.session.get('user'),
        },
    }
})
