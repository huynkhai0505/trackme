define({ "api": [
  {
    "type": "get",
    "url": "/api/devices",
    "title": "AllDevices An array of all devices * @apiGroup Device",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[ *{\n\"_id\": \"dsohsdohsdofhsofhosfhsofh\",\n     \"name\": \"Mary's iPhone\",\n     \"user\": \"mary\",\n\"sensorData\": [\n{\n      \"ts\": \"1529542230\",\n      \"temp\":12,     \n      \"loc\":{\n          \"lat\": -37.84674,\n          \"lon\": 145.115113\n             }\n}\n},\n{\n      \"ts\": \"1529542230\",\n      \"temp\":12,     \n      \"loc\":{\n          \"lat\": -37.84674,\n          \"lon\": 145.115113\n             }\n}\n}\n]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: *{",
          "content": "\"User does not exist\" *}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "group": "/Users/khaihuynh/Documents/code/SIT209/TrackMe/api/api.js",
    "groupTitle": "/Users/khaihuynh/Documents/code/SIT209/TrackMe/api/api.js",
    "name": "GetApiDevices"
  }
] });
