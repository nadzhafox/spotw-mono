# Roadmap (todo)

- create microservices
    - core business logic (use hexagonal/onion/ddd architecture)
    - todo: choose and wrap auth server 
        - https://github.com/oauthjs/node-oauth2-server
        - https://github.com/panva/node-oidc-provider (from my old project)
    - todo: some service that split logic, mb use diff db
    - todo: one service with rust language
    - ai service
    - elk stack service
    - payment service?
    - graphql federation schema
- create lib for base configuration and wrapping all apps (logs, config, ...)
- create lib authz dependance free (ddd style), todo (mb for checking rights on both sides back and front?)
- overthink old spotworld app, create big feature stack, prioritize them (business profit, personal grow ...)
- learn k8 