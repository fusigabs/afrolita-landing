<template><div><h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#server-requirements">Server requirements</router-link></li><li><router-link to="#download">Download</router-link></li><li><router-link to="#installation">Installation</router-link></li><li><router-link to="#deployment">Deployment</router-link></li><li><router-link to="#nginx-configuration">Nginx Configuration</router-link></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p><strong>ZioraCMS</strong> is a Laravel-powered drag-and-drop page builder. It comes with a clean page builder out-of-the-box, but also allows users to develop new components, easily generated with a single command. It is build on top of the <strong>VILT</strong> stack: <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue v3</a>, <a href="https://inertiajs.com/" target="_blank" rel="noopener noreferrer">Inertia js v1</a>, <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel v12+</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind css v4</a>. We're also using <a href="https://ui.nuxt.com" target="_blank" rel="noopener noreferrer">NuxtUI</a> components.</p>
<h2 id="server-requirements" tabindex="-1"><a class="header-anchor" href="#server-requirements"><span>Server requirements</span></a></h2>
<p>As this is a Laravel-based application, your server must meet the minimum requirements for running a Laravel 12+ application. See a full list of requirements on the <a href="https://laravel.com/docs/12.x/deployment#server-requirements" target="_blank" rel="noopener noreferrer">Laravel website here</a>.</p>
<h2 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h2>
<p>ZioraCMS is distributed exclusively through <a href="https://anystack.sh/" target="_blank" rel="noopener noreferrer">AnyStack</a>. Once you purchase a license, all you have to do it login to the platform and click on the <strong>Download</strong> link to download the package. Note that you will only be able to download versions up to the year when your license expires.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>The installation process does not require entering the license key. Once downloaded, proceed to install as follows:</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>ZioraCMS cannot be installed in an existing application. It should be used to create a brand new application.</p>
</div>
<ul>
<li>Download the application package and unzip in the location where you want to develop your Laravel app.</li>
<li>Copy the <code v-pre>.env.example</code> file to <code v-pre>.env</code></li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">cp</span> .env.example .env</span>
<span class="line"></span></code></pre>
</div><ul>
<li>Open the newly created <code v-pre>.env</code> file and enter your database credentials. The application is written and tested for <code v-pre>MySQL</code>. For MySQL, you need to configure the following:</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1</span>
<span class="line"><span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span><span class="token number">3306</span></span>
<span class="line"><span class="token assign-left variable">DB_DATABASE</span><span class="token operator">=</span>database_name</span>
<span class="line"><span class="token assign-left variable">DB_USERNAME</span><span class="token operator">=</span>forge</span>
<span class="line"><span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span>dasasasasa</span>
<span class="line"></span></code></pre>
</div><ul>
<li>In the application folder, install the composer packages:</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">composer</span> update</span>
<span class="line"></span></code></pre>
</div><ul>
<li>Install Node modules</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>Generate laravel application key</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan key:generate</span>
<span class="line"></span></code></pre>
</div><ul>
<li>Initialize Ziora CMS by creating roles, permissions and an admin user</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan builder:init</span>
<span class="line"></span></code></pre>
</div><p>This command will seed the database roles and permissions, and provide an interactive prompt to create an admin user.
<img src="@source/images/builder-init.png" alt="Builder init"></p>
<ul>
<li>Link the storage folder.</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">php artisan storage:link</span>
<span class="line"></span></code></pre>
</div><p>In this version of ZioraCMS, files are stored in a local disk, but as this is just a laravel application, you can configure other file storage as necessary. See <a href="https://laravel.com/docs/12.x/filesystem#main-content" target="_blank" rel="noopener noreferrer">Laravel's official documentation</a> on how to configure file storage.</p>
<ul>
<li>Run the development server</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">composer</span> dev</span>
<span class="line"></span></code></pre>
</div><ul>
<li>Go to your site URL and it should display a welcome page. Note that when the application is first created and before you choose a front page, this Welcome page is displayed as a fallback. But once a front page is set in the Admin panel, it will override the Welcome page as the home URL.</li>
</ul>
<h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h2>
<p>Again since this is a regular Inertia.js application, you can follow normal recommended Laravel deployment options. Generally this is the command to build the application in production:</p>
<ul>
<li>If you intend to run SSR, then build for SSR:</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build:ssr</span>
<span class="line"></span></code></pre>
</div><p>You can read more about <a href="https://inertiajs.com/server-side-rendering" target="_blank" rel="noopener noreferrer">Inertiajs SSR here</a></p>
<ul>
<li>If you do not need SSR, build the client-side bundle:</li>
</ul>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
</div><p>If deploying in <a href="https://forge.laravel.com" target="_blank" rel="noopener noreferrer">Laravel forge</a>, this is an example deploy script (for SSR):</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> /home/forge/mywebsite.com</span>
<span class="line"><span class="token function">git</span> pull origin <span class="token variable">$FORGE_SITE_BRANCH</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$FORGE_COMPOSER</span> <span class="token function">install</span> --no-dev --no-interaction --prefer-dist --optimize-autoloader</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span> flock <span class="token parameter variable">-w</span> <span class="token number">10</span> <span class="token number">9</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">'Reloading PHP FPM...'</span><span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token parameter variable">-S</span> <span class="token function">service</span> <span class="token variable">$FORGE_PHP_FPM</span> reload <span class="token punctuation">)</span> <span class="token operator"><span class="token file-descriptor important">9</span>></span>/tmp/fpmlock</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> artisan <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token variable">$FORGE_PHP</span> artisan migrate <span class="token parameter variable">--force</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token function">npm</span> ci</span>
<span class="line highlighted"><span class="token function">npm</span> run build:ssr</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-configuration" tabindex="-1"><a class="header-anchor" href="#nginx-configuration"><span>Nginx Configuration</span></a></h2>
<p>Since we are saving the entire content as JSON objects in the database, you may need to tweak your Nginx config to send large responses upstream as well as receive larger request bodies. Add the following to nginx:</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># Allow large response body to be sent upstream</span></span>
<span class="line">fastcgi_buffers <span class="token number">16</span> 16k<span class="token punctuation">;</span></span>
<span class="line">fastcgi_buffer_size 32k<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># increase max_body_size</span></span>
<span class="line">client_max_body_size 100M<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div></div></template>


