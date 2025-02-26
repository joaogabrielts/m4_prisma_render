# Vagas e Candidaturas API

## Rotas de Usuário

### Registro de usuário Post / users

Padrão de corpo

```json
{
  "name": "Osvaldo",
  "email": "osvaldo@email.com",
  "password": "@12patinhos"
}
```

Padrão de resposta(STATUS 201)

```json
{
  "id": 2,
  "name": "Osvaldo",
  "email": "osvaldo@email.com"
}
```

### Login Post /users/login

Padrão de corpo

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQwNTA4MzExLCJleHAiOjE3NDA1OTQ3MTF9.GJXnnRxvW5JAQ2y0IpJ5sKlkIgo81IiOXYXDUVO7iy8",
  "user": {
    "id": 1,
    "name": "Gabriel",
    "email": "gabriel@gamil.com"
  }
}
```

Possíveis erros

401 UNAUTHORIZED

```json
{
  "message": "Email and password doen't match"
}
```

404 UNAUTHORIZED

```json
{
  "message": "User not registered"
}
```

### Retorna usuário Get / users

É necessário autorização para acessar está rota,forneça o token do cabeçalho da requisição

```json
{
  "headers": {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQwNTA4MzExLCJleHAiOjE3NDA1OTQ3MTF9.GJXnnRxvW5JAQ2y0IpJ5sKlkIgo81IiOXYXDUVO7iy8"
  }
}
```

Padrão de resposta (STATUS 200)

```json
{
  "id": 1,
  "name": "Gabriel",
  "email": "gabriel@gamil.com"
}
```

### POST /opportunities (Está rota precisa de autorização )

Padrão de corpo

```json
{
  "title": "Lorem ipsum",
  "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
  "id": 1,
  "title": "Lorem ipsum",
  "description": "Lorem ipsum",
  "userId": 1
}
```

### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
  {
    "id": 1,
    "title": "Lorem ipsum",
    "description": "Lorem ipsum",
    "userId": 1
  }
]
```


### GET /opportunities/user (Está rota precisa de autorização )

Padrão de resposta (STATUS 200)

```json
[
  {
    "id": 1,
    "title": "Lorem ipsum",
    "description": "Lorem ipsum",
    "userId": 1
  }
]
```

### GET /opportunities/:id (Está rota precisa de autorização )

Padrão de resposta (STATUS 200)

```json
{
  "id": 1,
  "title": "Lorem ipsum",
  "description": "Lorem ipsum",
    "userId":1

}
```

Possíveis erros

404 NOT FOUND

```json
{
  "message": "Opportunity not found"
}
```

403 NOT FOUND

```json
{
  "message": "User is not the owner of this opportunity"
}
```

### PATCH /opportunities/:id (Está rota precisa de autorização )

Padrão de corpo

```json
{
  "title?": "Lorem ipsum",
  "description?": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
  "id": 1,
  "title": "Lorem ipsum",
  "description": "Lorem ipsum",
  "userId":1
}
```

### DELETE /opportunities/:id (Está rota precisa de autorização )

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
  "message": "Opportunity not found"
}
```
403 NOT FOUND

```json
{
  "message": "User is not the owner of this opportunity"
}
```

### POST /opportunities/:id/applications

Padrão de corpo

```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@email.com",
  "linkedin": "https://example.com",
  "opportunityId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
  "message": "Opportunity not found"
}
```

### GET /opportunities/:id/applications (Está rota precisa de autorização )

Padrão de resposta (STATUS 200)

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@email.com",
    "linkedin": "https://example.com",
    "opportunityId": 1
  }
]
```

Possíveis erros

404 NOT FOUND

```json
{
  "message": "Opportunity not found"
}
```
403 NOT FOUND

```json
{
  "message": "User is not the owner of this opportunity"
}
```
