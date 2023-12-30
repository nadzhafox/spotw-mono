# Architecture

Starts with modular monolith then try to break it to microservice

```mermaid
    graph LR
    A[API gateway] --> C[OAuth] 
    subgraph example
    C --> B[CORE]
    end



```