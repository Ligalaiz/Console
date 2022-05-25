/* eslint-disable */
import BaseCodeEditor from '../editors/baseCodeEditor.js';

class controllerJson {
  constructor(id, modules) {
    this.id = id;
    this.modules = modules;
    this.view = 'Json';
    this.elements = {};

    const value = `{
      "@context": {
        "name": "http://schema.org/name",
        "description": "http://schema.org/description",
        "image": {
          "@id": "http://schema.org/image",
          "@type": "@id"
        },
        "geo": "http://schema.org/geo",
        "latitude": {
          "@id": "http://schema.org/latitude",
          "@type": "xsd:float"
        },
        "longitude": {
          "@id": "http://schema.org/longitude",
          "@type": "xsd:float"
        },
        "xsd": "http://www.w3.org/2001/XMLSchema#"
      },
      "name": "The Empire State Building",
      "description": "The Empire State Building is a 102-story landmark in New York City.",
      "image": "http://www.civil.usherbrooke.ca/cours/gci215a/empire-state-building.jpg",
      "geo": {
        "latitude": "40.75",
        "longitude": "73.98"
      }
    }`;

    this.codeEditor = new BaseCodeEditor(id, modules, this.view, {
      mode: 'application/ld+json',
      value: '',
    });
  }
}

export default controllerJson;
