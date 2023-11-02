# Astronomy API

## Overview
This repository contains a NASA API that provides access to NASA Astronomy Picture of the Day. It offers functionalities to retrieve information from the Astronomy, which can be used for analysis, application development, or any other purpose.

There are 100 object from various years that are not sorted in any particular order.


## Usage
To use the Astronomy API, please follow these steps:

1. Clone the repository:
git clone https://github.com/pondern/Astronomy-API
    

2. Install dependencies:
Install dependencies using npm install (make sure to have node.js and npm installed already)

```JSON
  "scripts": {
    "start": "node server.js",
    "seed": "node seed/data.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.6.0",
    "chalk": "^5.3.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.6.3",
    "morgan": "^1.10.0"
  },
  "type": "module"
  
```
3. Run the API:
To run the project, use the command npm start.
It's important to make sure you have all the dependencies listed in the package.json file installed and correctly configured before running the project.

4. Access the API endpoints using a web browser or tools like cURL, Postman, or any HTTP client.

## API Routes

Base URL
```
https://astronomy-api-3a059f9816f1.herokuapp.com/api/astronomy
```
NOTE: Have a JSON viewer extension installed on your browser to display/"pretty" the large datasets in your browser.

Routes

```javascript
GET "/" Returns a list of all 100 astronomy objects
GET "/:id" Returns a single astronomy object by objectID
GET "/year/:year" Returns all astronomy objects within a specified year
POST "/" Creates a new astronomy object
PUT "/:id" Updates an existing astronomy object
DELETE "/:id" Deletes a astronomy object by objectID.
```

## Schema
- Retrieve Astronomy details:

```javascript
let AstronomySchema = new Schema ({
    date: {type: String},
    explanation: {type: String},
    media_type: {type: String},
    title: {type: String},
    hdurl: {type: String},
    url: {type: String}

})
```
## Example Data

```json
  {
    "_id": "6543bbc2a9d6f15e8012e14e",
    "date": "2005-11-30",
    "explanation": "Sculpted by stellar winds and radiation, a magnificent interstellar dust cloud by chance has assumed this recognizable shape.  Fittingly named the Horsehead Nebula, it is some 1,500 light-years distant, embedded in the vast Orion cloud complex. About five light-years \"tall\", the dark cloud is cataloged as Barnard 33 and is visible only because its obscuring dust is silhouetted against the glowing red emission nebula IC 434.  Contrasting blue reflection nebula NGC 2023 is visible on the lower left.  In this gorgeous color image, both Horsehead and NGC 2023 seem to be caught in beams of light shining from above -- but the beams are actually just internal reflections from bright star Sigma Orionis, just off the upper edge of the view.",
    "media_type": "image",
    "title": "Reflections on the Horsehead Nebula",
    "hdurl": "https://apod.nasa.gov/apod/image/0511/horsehead_verschatse_f.jpg",
    "url": "https://apod.nasa.gov/apod/image/0511/horsehead_verschatse_f33.jpg",
    "__v": 0
  },
  {
    "_id": "6543bbc2a9d6f15e8012e14f",
    "date": "2005-11-25",
    "explanation": "Last week, the nearly Full Moon set along the northern horizon - as seen from Davis Station, Antarctica.  The squashed orange pumpkin shape just silhouettes the peak of a distant iceberg in this stunning view.  The Moon's apparently squashed shape is due to atmospheric bending of light or refraction - an effect which is more severe closer to the horizon. Skimming low along the stark features of the frozen landscape, the Moon's lower edge appears noticeably more distorted than the upper limb. Along with about 70 others present at Davis Station, Dr. Jim Behrens had a chance to enjoy the view while studying the ongoing detachment of a large iceberg known as \"Loose Tooth\".",
    "media_type": "image",
    "title": "Moon Over Antarctica",
    "hdurl": "https://apod.nasa.gov/apod/image/0511/moonantarctica_behrens_f.jpg",
    "url": "https://apod.nasa.gov/apod/image/0511/moonantarctica_behrens_f27.jpg",
    "__v": 0
  },
```
## Contribution
Contributions to this project are welcome. If you'd like to contribute, feel free to fork this repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer
This API is created for educational purposes and does not claim official affiliation or endorsement by the NBA.

## Contact
For any questions or concerns, please [open an issue](https://github.com/Lindevin101/NBA-API/issues) in this repository.