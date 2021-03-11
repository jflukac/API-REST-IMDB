# API REST Exercise
This is an exercise consisted on programming an API, so that it could Creadte, Read, Update and Delete three diferent resources: Movies, Actors and Genres.

The API endpoints are listed and explaind below:

### List all Movies 
> (GET: 'http://localhost:3000/api/movies/'):
This method sends a list of all movies, but doesn't include the association with genre and actors table. 

### Detail of only one movie 
> (GET: 'http://localhost:3000/api/movies/:id'):
This methos sends only one movie, but including actors and genres associations.

### Create a Movie 
> (POST: 'http://localhost:3000/api/movies/'):
This method creates a new movie. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "title": "Movie Title",
    "awards": INTEGER #ofAwards,
    "length": INTEGER #ofMinutes,
    "releas_date": "yyyy-mm-ddT00:00:00.000Z",
    "genre_id": INTEGER
} 
```

### Update a Movie 
> (PATCH: 'http://localhost:3000/api/movies/:id'):
This method updates a new movie. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "title": "Movie Title",
    "awards": INTEGER #ofAwards,
    "length": INTEGER #ofMinutes,
    "releas_date": "yyyy-mm-ddT00:00:00.000Z",
    "genre_id": INTEGER
}
```

### Delete a Movie 
> (DELETE: 'http://localhost:3000/api/movies/:id'):
This method deletes the movie selected with req.params.id

### Add an Actor to a Movie 
> (POST: 'http://localhost:3000/api/movies/:id/actor'):
This method requires a movie_id in the params, and the actor_id in the req.body and creates the relation between both tables:
```
req.body = {
    "actor_id": INTEGER,
    "screentime": 
    }
```

### Delete an actor from a movie 
> (DELETE: 'http://localhost:3000/api/movies/:id/actor/:actor_id'):
This method requires a movie and actor id in the parameters in the url, and deletes the relation between them.

### List All actors 
> (GET: 'http://localhost:3000/api/actors/'):
This method sends a list of all actors, with no associations.

### Detail of one actor 
> (GET: 'http://localhost:3000/api/actors/:id'):
This methos sends only one actor, but including favorite and movies associations.

### Create an Actor 
> (POST: 'http://localhost:3000/api/actors/'):
This method creates a new actor. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "first_name": "Nombre del Actor",
    "last_name": "Apellido del Actor",
    "favorite_movie_id": INTEGER,
    "rating": "Rating del 1 al 10 como STRING",
}
```

### Update an Actor 
> (PATCH: 'http://localhost:3000/api/actors/:id'):
This method updated a new actor. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "first_name": "Nombre del Actor",
    "last_name": "Apellido del Actor",
    "favorite_movie_id": INTEGER,
    "rating": "Rating del 1 al 10 como STRING",
}
```

### Delete an Actor 
> (DELETE: 'http://localhost:3000/api/actors/:id'):
This method deletes the actor declared in req.params.id

### List all genres 
> (GET: 'http://localhost:3000/api/genres/'):
This method sends a list of all genres, with no associations.

### Detail of one genre 
> (GET: 'http://localhost:3000/api/genres/:id'):
This methos sends only one genre, but including movies associations.

### Create an Actor 
> (POST: 'http://localhost:3000/api/genres/'):
This method creates a new actor. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "name": "Nombre del Género",
    "ranking": INTEGER,
    "active": BOOLEAN,
}
```

### Update an Actor 
> (PATCH: 'http://localhost:3000/api/genres/:id'):
This method updated a new actor. Because it is a POST method, the req.body has to be like this:
```
req.body = {
    "name": "Nombre del Género",
    "ranking": INTEGER,
    "active": BOOLEAN,
}
```

### Delete an Actor 
> (DELETE: 'http://localhost:3000/api/genres/:id'):
This method deletes the genre declared in req.params.id

