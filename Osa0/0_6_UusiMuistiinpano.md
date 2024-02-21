sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {content: "Testi", date: "2024-02-21T09:15:56.617Z"}...
    deactivate server
