# Get Started
[[toc]]

## Introduction
**ZioraCMS** is a Laravel-powered drag-and-drop page builder. It comes with a clean page builder out-of-the-box, but also allows users to develop new components, easily generated with a single command. It is build on top of the **VILT** stack: [Vue v3](https://vuejs.org), [Inertia js v1](https://inertiajs.com/), [Laravel v12+](https://laravel.com) and [Tailwind css v4](https://tailwindcss.com). We're also using [NuxtUI](https://ui.nuxt.com) components.

## Server requirements
As this is a Laravel-based application, your server must meet the minimum requirements for running a Laravel 12+ application. See a full list of requirements on the [Laravel website here](https://laravel.com/docs/12.x/deployment#server-requirements).


## Download 
ZioraCMS is distributed exclusively through [AnyStack](https://anystack.sh/). Once you purchase a license, all you have to do it login to the platform and click on the **Download** link to download the package. Note that you will only be able to download versions up to the year when your license expires.


## Installation
The installation process does not require entering the license key. Once downloaded, proceed to install as follows:

::: info 
ZioraCMS cannot be installed in an existing application. It should be used to create a brand new application.
:::
* Download the application package and unzip in the location where you want to develop your Laravel app.
* Copy the `.env.example` file to `.env`
```bash:no-line-numbers 
cp .env.example .env
```
* Open the newly created `.env` file and enter your database credentials. The application is written and tested for `MySQL` and `SQLite`. eg For MySQL, you need to configure the following:
```bash:no-line-numbers 
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=forge
DB_PASSWORD=dasasasasa
```

* In the application folder, install the composer packages:
```bash:no-line-numbers 
composer update
```
* Install Node modules
```bash:no-line-numbers 
npm install
```
* Generate laravel application key
```bash:no-line-numbers 
php artisan key:generate
```
* Initialize Ziora CMS by creating roles, permissions and an admin user
```bash:no-line-numbers 
php artisan builder:init
```
This command will seed the database roles and permissions, and provide an interactive prompt to create an admin user.
![Builder init](./images/builder-init.png)

* Link the storage folder. 
```bash:no-line-numbers 
php artisan storage:link
```
In this version of ZioraCMS, files are stored in a local disk, but as this is just a laravel application, you can configure other file storage as necessary. See [Laravel's official documentation](https://laravel.com/docs/12.x/filesystem#main-content) on how to configure file storage.

* Run the development server
```bash:no-line-numbers 
composer dev
```

* Go to your site URL and it should display a welcome page. Note that when the application is first created and before you choose a front page, this Welcome page is displayed as a fallback. But once a front page is set in the Admin panel, it will override the Welcome page as the home URL.

## Deployment
Again since this is a regular Inertia.js application, you can follow normal recommended Laravel deployment options. Generally this is the command to build the application in production:

* If you intend to run SSR, then build for SSR:
```bash:no-line-numbers 
npm run build:ssr
```
You can read more about [Inertiajs SSR here](https://inertiajs.com/server-side-rendering)

* If you do not need SSR, build the client-side bundle:
```bash:no-line-numbers 
npm run build
```

If deploying in [Laravel forge](https://forge.laravel.com), this is an example deploy script (for SSR):

```bash{13-14}
cd /home/forge/mywebsite.com
git pull origin $FORGE_SITE_BRANCH

$FORGE_COMPOSER install --no-dev --no-interaction --prefer-dist --optimize-autoloader

( flock -w 10 9 || exit 1
    echo 'Reloading PHP FPM...'; sudo -S service $FORGE_PHP_FPM reload ) 9>/tmp/fpmlock

if [ -f artisan ]; then
    $FORGE_PHP artisan migrate --force
fi

npm ci 
npm run build:ssr
```