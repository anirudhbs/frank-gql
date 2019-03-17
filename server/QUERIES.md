# Queries

This document contains queries made in the Playground while building this project

- First query: getting info

```
query {
  info
}
```

- Get feed information along with info

```
query {
  info
  feed {
    url
    id
    description
  }
}
```

- Adding link

```
mutation {
  post(
    url: "www.twitter.com/onfireani"
    description: "My Twitter ID"
  ) {
    id
  }
}
```

- Getting link by ID argument

```
query {
  link(id: "link-0") {
    url
    description
    id
  }
}
```

- Deleting a link

```
mutation {
  delete(id: "link-0") {
    id
  }
}
```

- Updating a link

```
mutation {
  update(
    id: "link-0",
    description: "This is a new description"
  ) {
	id
  }
}
```
