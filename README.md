<div align="center">
    <h3><a href="https://form-builder-nextjs.vercel.app/">form-builder-nextjs.vercel.app</a></h2>
    <h1>Forms - OAuth2 included</h1>
</div>

![Preview](https://turtlepaw.is-from.space/r/msedge_FbtuTRh2zX.png)
*Sneak peak of what's coming*

## Development

### .env
The `.env` file is required for secret tokens, here's what it should look like:

```env
//Database
URL=mongodb+srv://USERNAME:PASSWORD@cluster1.enjfvj.mongodb.net/master
//Website
JWT_SECRET=****************
APP_URI=https://localhost:3000
//Discord
CLIENT_ID=******************
CLIENT_SECRET=**********************
```

## Changelogs
### 8/2/2022
* Added OAuth2 support
* Added navigation menu component
* Added Link component
* Added database connection
* Added [Tailwind](https://tailwindcss.com/) CSS framework
* Added multiple images (`Discord.png`, `img.png`)
* Updated the `README.md` file
* Changed project to TypeScript