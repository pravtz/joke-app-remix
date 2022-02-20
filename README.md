# 🤪 Welcome joke

## Description

This is a joke application that serves as an example to explore the functionality of the remix framework. This application follows the recommendations of the remix.run documentation

## How to use

### Steps:

- Clone the project in the desired folder

    ```bash
    git clone https://github.com/pravtz/joke-app-remix.git
    ```
- Install dependences

    ```bash
        npm install
    ```
-  Create a file named ".env" and write a message or word that will serve as security for the sections

    ```text
        SESSION_SECRET=anyware
    ```

-  Initialize the database by running the command
    ```bash
        npx prisma db push
    ```

- For development use

    ```bash
        npm run dev
    ```

- Or to build the application 

    ```bash
        npm run build && npm start
    ```

Congratulations, now it's time to enjoy🎉

---

## Dependences
-   prisma
-   remix
-   react
-   typescript
-   bcryptjs
-   esbuild-register
-   tiny-invariant

## Documentation Joke Remix

-   [Remix](https://remix.run/docs/en/v1/tutorials/jokes)
