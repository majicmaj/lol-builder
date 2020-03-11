# legendAPI

## Introduction
legendAPI uses the latest NA patch(version) json data and maps summaries out of them to create some data about champions, items, and maps.

## How it works
Generates links like 
```
http://ddragon.leagueoflegends.com/cdn/9.15.1/data/en_US/champion.json
http://ddragon.leagueoflegends.com/cdn/9.15.1/data/en_US/item.json
http://ddragon.leagueoflegends.com/cdn/9.15.1/data/en_US/map.json
```
and accesses the json data inside of it to fullfill the model schemas.

### Model Schemas 
| Champion                                    | Item                                        | Map                                         |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| <img src="https://i.imgur.com/TS8M1uv.png"> | <img src="https://i.imgur.com/owUEc7z.png"> | <img src="https://i.imgur.com/4KisYiU.png"> |

### Data mapping and processing

| Champion                                    | Item                                        | Map                                         |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| <img src="https://i.imgur.com/pvz2r3W.png"> | <img src="https://i.imgur.com/LjshXRi.png"> | <img src="https://i.imgur.com/IUd2iI1.png"> |
### Routes

| Champion                                    | Item                                        | Map                                         |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| <img src="https://i.imgur.com/An9gy7p.png"> | <img src="https://i.imgur.com/tqlCC9u.png"> | <img src="https://i.imgur.com/Chi4MjD.png"> |

### Controllers

| Champion                                    | Item                                        | Map                                         |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| <img src="https://i.imgur.com/MZfSxwa.png"> | <img src="https://i.imgur.com/OstIrv4.png"> | <img src="https://i.imgur.com/cDxoCKD.png"> |

### App

| Index.js                                    |
|---------------------------------------------|
| <img src="https://i.imgur.com/2ZH0IDm.png"> |

## Using the API

### Tables of our REST routes and their corresponding controller actions
| URL         | Path          | Method   | Action  | Description                                             |
|-------------|---------------|----------|---------|---------------------------------------------------------|
| `/champion` | `/`           | `GET`    | #index  | List all champions                                      |
| `/champion` | `/name/:name` | `GET`    | #show   | show specefic champion by name = ${req.params.name}     |
| `/champion` | `/`           | `POST`   | #create | create new champion with champion = ${req.body}         |
| `/champion` | `/:name`      | `PUT`    | #edit   | edit specefic champion by name = ${req.params.name}     |
| `/champion` | `/:name`      | `DELETE` | #delete | Delete a specefic champion by name = ${req.params.name} |


| URL     | Path          | Method | Action | Description                             |
|---------|---------------|--------|--------|-----------------------------------------|
| `/item` | `/`           | `GET`  | #index | List all items                          |
| `/item` | `/name/:name` | `GET`  | #show  | show map with name = ${req.params.name} |


| URL    | Path          | Method | Action  | Description                             |
|--------|---------------|--------|---------|-----------------------------------------|
| `/map` | `/`           | `GET`  | #index  | List all maps                           |
| `/map` | `/name/:name` | `GET`  | #show   | show map with name = ${req.params.name} |
| `/map` | `/id/:id`     | `POST` | #showId | show map with _id = ${req.params.id}    |

## Reflection

### What I learned:
I feel like while working on this project I learned a lot about seeding a database and manipulating data into a form thats easier to use. 

### Next steps:
As I continue into the next unit learning React, I'll be coming back here to complete some of the functionality that isn't working to expectation and hpoefully a better interface.
