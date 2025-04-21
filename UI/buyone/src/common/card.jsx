import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Card(props) {
  return (
    <div style={styles.card}>
    <MDBCard>
      <MDBCardImage position='top' alt='...' style={styles.image} src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.content}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Price: {props.price}</MDBListGroupItem>
        <MDBListGroupItem>Sale Price: {props.sale_price}</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Update</MDBCardLink>
        <MDBCardLink href='#'>Delete</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

const styles = {
    card: {
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '16px',
      margin: '10px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '12px',
    },
  };