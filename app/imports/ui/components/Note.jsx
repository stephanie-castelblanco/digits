import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Note = ({ note }) => (
  <Card>
    <ListGroup.Item>
      <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
      <p>{note.note}</p>
    </ListGroup.Item>
  </Card>
);

// Require a document to be passed to this component.
Note.propTypes = {
  note: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default Note;
